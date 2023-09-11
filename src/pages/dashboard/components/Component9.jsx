import React, { useState } from 'react';
import { Box, Text, FormControl, FormLabel,Input, Button, Select } from '@chakra-ui/react';
const Component9 = () => {
    const [sector, setSector] = useState('');
  const [sectorRole, setSectorRole] = useState('');
  const [description, setDescription] = useState('');

  const handleAddInterest = () => {
  };
  return (
    <Box border="1px solid orange" borderTop="10px solid orange" p="20px" width="800px" margin="0 auto" position="relative">
      <Text textAlign="center" position="relative" mb="10px" fontWeight="bold" fontSize="20px">My Job Interest</Text>

      <FormControl mb="10px">
      <FormLabel>Sector</FormLabel>
        <Select
          placeholder="Select a sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="sector1">Sector 1</option>
          <option value="sector2">Sector 2</option>
          {/* Add more sector options as needed */}
        </Select>
      </FormControl>

      <FormControl mb="10px">
      <FormLabel>Sector Role</FormLabel>
        <Select
          placeholder="Select a sector role"
          value={sectorRole}
          onChange={(e) => setSectorRole(e.target.value)}
        >
          <option value="role1">Role 1</option>
          <option value="role2">Role 2</option>
          {/* Add more sector role options as needed */}
        </Select>
      </FormControl>

      <FormControl mb="10px">
      <FormLabel>Description</FormLabel>
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" position="relative" top="10px" left="50%" transform="translateX(-50%)"onClick={handleAddInterest}>
        Add Interest
      </Button>
    </Box>
  )
}

export default Component9