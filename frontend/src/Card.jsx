import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ amount, img, CheckoutHandle, productName }) => {
  return (
    <VStack>
      <Image src={img} boxSize={"80"} objectFit={"contain"} margin={"15px"} />
      <Text fontWeight={500}>{productName}</Text>
      <Text>₹ {amount}</Text>
      <Button onClick={() => CheckoutHandle(amount)}>Buy Now</Button>
    </VStack>
  );
};

export default Card;
