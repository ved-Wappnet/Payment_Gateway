import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const refeNo = searchQuery.get("reference");
  console.log(refeNo);
  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfully</Heading>

        <Text>Refrence No.{refeNo}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
