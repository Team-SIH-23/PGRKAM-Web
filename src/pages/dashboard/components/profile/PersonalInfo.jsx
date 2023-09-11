import React from 'react'
import { Box, FormControl,FormLabel, Input, Button,Select ,Text } from "@chakra-ui/react";

const PersonalInfo = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [dob, setDob] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [relation, setRelation] = useState('');
    const [category, setCategory] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [preference, setPreference] = useState('');
    const punjabCities = ['Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali', 'Pathankot', 'Sangrur', 'Firozpur', 'Moga'];
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    const handleFileChange = (e) => {
        // Handle file upload here, you can access the selected file using e.target.files[0]
        const selectedFile = e.target.files[0];
        // You can perform actions like validation or store the selected file in state.
      };
  return (
    <form onSubmit={handleSubmit}>
      <Box border="1px solid orange" borderTop="10px solid orange" p="20px" width="800px" margin="0 auto" position="relative">
        <Text position="relative" mb="10px" fontWeight="bold">Personal Information</Text>
        <FormControl mb="10px">
          <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Input type="tel" placeholder="Enter your mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Select placeholder="Select gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl mb="10px">
          <Input type="text" placeholder="Enter your expected salary" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Input type="date" placeholder="Select your date of birth" value={dob} onChange={(e) => setDob(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Input type="text" placeholder="Enter guardian's name" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Input type="text" placeholder="Enter relation" value={relation} onChange={(e) => setRelation(e.target.value)} />
        </FormControl>
        <FormControl mb="10px">
          <Select type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="others">Others</option>
        </Select>
        </FormControl>
        <FormControl mb="10px">
          <Select placeholder="Select marital status" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </Select>
        </FormControl>
        <FormControl mb="10px">
          <Select placeholder="Select 1st preference" value={preference[0]} onChange={(e) => setPreference([e.target.value, preference[1], preference[2]])}>
            {punjabCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb="10px"> 
          <Select placeholder="Select 2nd preference" value={preference[1]} onChange={(e) => setPreference([preference[0], e.target.value, preference[2]])}>
            {punjabCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb="10px">
          <Select placeholder="Select 3rd preference" value={preference[2]} onChange={(e) => setPreference([preference[0], preference[1], e.target.value])}>
            {punjabCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb="20px">
        <FormLabel htmlFor="fileUpload">Upload Your CV (PDF, DOC, DOCX)</FormLabel>
          <Input type="file" id="fileUpload" accept=".pdf,.doc,.docx" onChange={handleFileChange} /> 
        </FormControl>
        <Button type="submit" colorScheme="blue" position="relative" top="10px" left="50%" transform="translateX(-50%)">
          Save
        </Button>
      </Box>
    </form>
  )
}

export default PersonalInfo