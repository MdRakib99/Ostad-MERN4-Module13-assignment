import { useEffect, useState } from "react";

const APIBlog = () => {
  let [data, setData] = useState();
  useEffect(() => {
    (async () => {
      let response = await fetch("https://dummyjson.com/products/1");
      let json = await response.json();
      setData(json);
    })();
  }, []);
  return (
    <div>
      <h2>Blog API</h2>

      {JSON.stringify(data)}
    </div>
  );
};

export default APIBlog;
