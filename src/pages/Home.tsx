import React, { useCallback, useEffect } from "react";
import getQuestion from "../data/questions";

const Home = () => {
  const fetchData = useCallback(getQuestion, [getQuestion]);
  useEffect(() => {
    fetchData().then((questions) => {
      console.log(questions);
    });
  }, []);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
