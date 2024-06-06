import { Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="brand.700" w="100%" p={4} color="white">
      <Flex maxW="container.md" mx="auto" alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
      </Flex>
    </Box>
  );
};

export default Navbar;