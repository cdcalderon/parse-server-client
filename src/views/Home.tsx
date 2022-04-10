import React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

const Home = () => {
  const { Moralis } = useMoralis();

  async function food() {
    const Food = Moralis.Object.extend("Food");
    const foodi = new Food();
    foodi.set("food", "pizza");
    foodi.set("athAddress", "0x0");

    await foodi.save();
  }

  return (
    <VStack alignItems={"start"}>
      <Heading mb={8}>Home</Heading>
      <button onClick={food}>Food</button>
    </VStack>
  );
};

export default Home;
