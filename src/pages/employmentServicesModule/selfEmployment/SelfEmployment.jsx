// import React from "react";

// const SelfEmployment = () => {
//   return <div>SelfEmployment</div>;
// };

// export default SelfEmployment;




//-------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";

const SelfEmployment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/selfemployment/view")
      .then((response) => response.json())
      .then((data) => {
        setData(data); 
        setLoading(false); 
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, []);

  return (
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
  );
};

export default SelfEmployment;
