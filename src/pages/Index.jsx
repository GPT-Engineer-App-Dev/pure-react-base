import { Container, Text, VStack, Box, Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your React App</Heading>
        <Text fontSize="lg">This is a clean and minimalistic design, ready for further development.</Text>
      </VStack>
    </Container>
  );
};

export default Index;