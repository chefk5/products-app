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
import { MainNavigationProp, MainRoutes } from "../navigation/Types";
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorCompoenent";

interface ProductsProps {
  navigation: MainNavigationProp<MainRoutes.Products>;
}

const Products = ({ navigation }: ProductsProps) => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const openDetailsScreen = (id: number) => {
    const selectedItem = data?.find((product) => product.id === id);

    if (selectedItem) {
      const { id, title, images, price, rating, brand, description } =
        selectedItem;

      const selectedItemDetails = {
        id,
        title,
        images,
        price,
        rating,
        brand,
        description,
      };
      navigation.navigate(MainRoutes.Details, selectedItemDetails);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <ErrorComponent onRetry={refetch} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && (
        <ProductsList products={data} navigationFunc={openDetailsScreen} />
      )}
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
