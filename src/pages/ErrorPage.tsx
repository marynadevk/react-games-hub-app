import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { NavBar } from '../components';

const ERROR_MESSAGES = {
  '404': 'This page does not exist.',
  '500': 'An unexpected error occurred.',
};

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? ERROR_MESSAGES[404]
            : ERROR_MESSAGES[500]}
        </Text>
      </Box>
    </>
  );
};
