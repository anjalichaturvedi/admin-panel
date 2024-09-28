import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Box width="100%">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Admin Panel</Heading>
        </Box>
        <Spacer />
        <Button as={RouterLink} to="/" colorScheme="teal">Users</Button>
        <Button as={RouterLink} to="/user" colorScheme="teal">Add User</Button>
        <Button as={RouterLink} to="/analytics" colorScheme="teal">Analytics</Button>
      </Flex>
    </Box>
  );
}

export default Navbar;