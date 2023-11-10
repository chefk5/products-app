import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { fetchProducts } from "../services/products";
import { FlashList } from "@shopify/flash-list";
import ProductsList from "../components/ProductsList";
import { Product } from "../app/types";
import { colors } from "../styles/theme";

type Props = {};

const Products = ({ navigation }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  return (
    <View style={styles.container}>
      {data && <ProductsList products={data} />}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
      ></TouchableOpacity> */}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
