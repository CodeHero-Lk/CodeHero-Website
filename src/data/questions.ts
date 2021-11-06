interface Question {
  question: string;
  user: number;
  answers: {
    answer: string;
    user: number;
  }[];
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface PopulatedData extends Question {
  rel: User;
}

const getQuestion = () => {
  return new Promise((resolve, reject) => {
    const url = "./question.json";
    const url2 = "./user.json";

    fetch(url)
      .then((response) => response.json())
      .then((data: Question[]) => {
        fetch(url2)
          .then((res) => res.json())
          .then((users: User[]) => {
            const populatedData: PopulatedData[] = [];
            data.forEach((question: any) => {
              const rel = users.find((user: any) => {
                return user.id === question.user;
              });

              populatedData.push({ ...question, rel });
            });
            resolve(populatedData);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getQuestion;
