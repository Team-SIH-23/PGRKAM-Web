import React from 'react'
import {Box,Text,Image,Link} from "@chakra-ui/react"
const Component8 = () => {
  return (
<Box border="1px solid orange" borderTop="40px solid orange" p="10px" width="1000px" margin="0 auto" position="relative" >
  <Text mb="10px"  textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
    Rozgar Mela-07.08.2023
  </Text>
  <Image  mb="10px" src="logo-new2.png" alt="Image Description" width="10%" maxH="300px" objectFit="cover" margin="0 auto"/>
  <Text  mb="10px" textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="20px" color="#333">
  PUNJAB GHAR GHAR ROZGAR & KAROBAR MISSION
  </Text>
  <Text  mb="10px" textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
  HALL TICKET FOR JOB FAIR IN ROZGAR MELA - 07.06.2023
  </Text>
  <Text mb="10px" textAlign="center" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
  You have applied for the following Jobs on www.pgrkam.com in the Rozgar Mela - 07.06.2023. You are required to show your Hall ticket at the Interview Venue .Your credentials will be shared with the Employer(s). You may contact the District Bureau of Employment and Enterprises (DBEE) in case some clarification is required regarding the interviews in the Rozgar Mela - 07.06.2023.
  </Text>
  <Box border="1px solid black">
  <Text  mb="10px" textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="18px" color="#333">
   Candidate Information
  </Text>
  <Text  mb="10px" pl={2} fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
  Name:   Admin
  </Text>
  <Text  mb="10px" pl={2} fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
   District: Amritsar
  </Text>
  <Text  mb="10px"  pl={2} fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
  Gender: Male
  </Text>
  </Box>
  <Text mb="10px"  pt={2}  textAlign="center" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
  You have not applied for any job in Rozgar Mela - 07.06.2023 through<Link color="blue" href=" http://pgrkam.com" isExternal> http://pgrkam.com</Link>.<br/>

Disclaimer: Merely applying for the jobs through this portal does not entitle you to be selected for the job(s) that you have applied. This portal is for the facilitation of the Jobseekers and the Employers.
  </Text>
  <Text mb="10px"  textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif" fontSize="15px" color="#333">
  For contact details of the DBEE, <Link color="blue" href="https://www.pgrkam.com/employment" isExternal> Click Here</Link>
  </Text>
</Box>

  )
}

export default Component8