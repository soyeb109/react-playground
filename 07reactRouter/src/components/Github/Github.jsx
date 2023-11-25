import React, { useEffect, useState } from "react";

const Github = () => {
  // const data = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/soyeb101")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git pic" width={300} />
    </div>
  );
};

export default Github;
// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/soyeb101");
//   return response.json();
// };
