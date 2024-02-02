import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const CheckoutHandle = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Ved Panchal",
      description: "Payment Intigratiom",
      image:
        "https://plus.unsplash.com/premium_photo-1663089618023-6372063dfd44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    // console.log(data);
  };

  return (
    <Box>
      <Stack
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={"1,99,900"}
          img={
            "https://images.unsplash.com/photo-1702184117235-56002cb13663?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          productName="Iphone 15 pro"
          CheckoutHandle={CheckoutHandle}
        />
        <Card
          amount={"1,25,316"}
          img={
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          productName="MacBook pro"
          CheckoutHandle={CheckoutHandle}
        />
        <Card
          amount={"50,000"}
          img={
            "https://images.unsplash.com/photo-1628285348080-38683c1232be?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          productName="Canon"
          CheckoutHandle={CheckoutHandle}
        />
      </Stack>
    </Box>
  );
};

export default Home;
