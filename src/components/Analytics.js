import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Analytics() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getRegistrationCounts = () => {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const counts = {
      last24Hours: 0,
      last7Days: 0,
      last15Days: 0,
      last30Days: 0
    };

    userData.forEach(user => {
      const registrationDate = new Date(user.registrationDate);
      const timeDiff = now - registrationDate;

      if (timeDiff <= oneDay) counts.last24Hours++;
      if (timeDiff <= 7 * oneDay) counts.last7Days++;
      if (timeDiff <= 15 * oneDay) counts.last15Days++;
      if (timeDiff <= 30 * oneDay) counts.last30Days++;
    });

    return counts;
  };

  const registrationCounts = getRegistrationCounts();

  const chartData = [
    { name: 'Last 24 Hours', value: registrationCounts.last24Hours },
    { name: 'Last 7 Days', value: registrationCounts.last7Days },
    { name: 'Last 15 Days', value: registrationCounts.last15Days },
    { name: 'Last 30 Days', value: registrationCounts.last30Days }
  ];

  return (
    <VStack spacing={8} align="stretch">
      <Heading>User Registration Analytics</Heading>
      <Box>
        <Heading size="md">Registration Metrics</Heading>
        <Text>Last 24 Hours: {registrationCounts.last24Hours}</Text>
        <Text>Last 7 Days: {registrationCounts.last7Days}</Text>
        <Text>Last 15 Days: {registrationCounts.last15Days}</Text>
        <Text>Last 30 Days: {registrationCounts.last30Days}</Text>
      </Box>
      <Box height="400px">
        <Heading size="md">Registration Trend</Heading>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </VStack>
  );
}

export default Analytics;