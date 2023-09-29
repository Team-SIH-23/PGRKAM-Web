import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";

posthog.init("phc_hWR3oOZKslKrvx4p2uYgJTcqLDM4AaDd1TTnfA0djxh", {
  api_host: "https://610a-103-215-237-106.ngrok-free.app",
});

const SelfEmployment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    posthog?.capture("Clicked Self Employment");
    fetch("https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/selfemployment/view")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data); 
        setLoading(false); 
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <h2>Self Employment</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.scheme_name}</li> // Adjust this based on your API response structure
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default SelfEmployment;
