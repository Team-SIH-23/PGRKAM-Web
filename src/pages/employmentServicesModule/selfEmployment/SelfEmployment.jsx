import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import posthog from 'posthog-js'; // Import the PostHog library

posthog.init("phc_hWR3oOZKslKrvx4p2uYgJTcqLDM4AaDd1TTnfA0djxh", {
  api_host: "https://610a-103-215-237-106.ngrok-free.app",
});

const itemsPerPage = 10; // Number of items to display per page

const SelfEmployment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    posthog?.capture("Clicked Self Employment");
    fetch("https://pgrkamadmin.pgrkam.com/m_api/v1/index.php/selfemployment/view")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Navbar />
      <Center>
        <Heading as="h2" size="xl" shadow="lg" mt="4" mb="3">
          Self Employment
        </Heading>
      </Center>
      <div>
        {/* <h2>Self Employment</h2> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ul>
              {currentItems.map((item) => (
                <li key={item.id}>
                  <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    p="4"
                    rounded="md"
                    shadow="md"
                    borderTop="3px solid orange"
                  >
                    <strong>Scheme Name:</strong> {item.scheme_name}
                    <br />
                    <strong>Margin (in %) :</strong> {item.margin_min} - {item.margin_max}
                    <br />
                    <strong>Loan Amount (in INR):</strong> {item.loan_amount_min} - {item.loan_amount_max}
                    <br />
                    <strong>Subsidy:</strong> {item.subsidy}
                    <br />
                    <strong>Collateral Free:</strong> {item.collateral_free === "1" ? "Yes" : "No"}
                    <br />
                    <strong>Application Form:</strong>{" "}
                    <a href={item.application_form} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                    <br />
                    <strong>DBEES Name:</strong> {item.dbees_name}
                    <br />
                    <strong>Contact:</strong> {item.contact}
                    <br />
                    <Button colorScheme="orange">Interested</Button>
                  </Box>
                </li>
              ))}
            </ul>
            <Center>
              <Box mt="4">
                <Button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  mr="2"
                >
                  Previous
                </Button>
                <span> Page {currentPage} of {totalPages} </span>
                <Button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  ml="2"
                >
                  Next
                </Button>
              </Box>
            </Center>
          </>
        )}
      </div>
    </>
  );
};

export default SelfEmployment;
