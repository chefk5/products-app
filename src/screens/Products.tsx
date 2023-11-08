import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

type Props = {};

const Products = ({ navigation }) => {
  return (
    <View>
      <Text>Products</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text>details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Products;
