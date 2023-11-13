import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../app/types";
import ErrorComponent from "./ErrorCompoenent";
import Loader from "./Loader";

interface IProductsList {
  products: Product[];
  navigationFunc: (id: number) => void;
  onRetry: () => void;
  isError?: boolean;
  isLoading?: boolean;
  isSearchTerm?: boolean;
}

const ProductsList = ({
  products,
  navigationFunc,
  onRetry,
  isError,
  isLoading,
  isSearchTerm,
}: IProductsList) => {
  const [refreshing, setRefreshing] = useState(false);

  const shouldShouldError =
    (!products || products?.length === 0 || isError) && !isLoading;

  const onRefresh = async () => {
    setRefreshing(true);
    await onRetry();
    setRefreshing(false);
  };

  if (shouldShouldError) {
    return (
      <View style={styles.container}>
        <ErrorComponent
          msg={"No Products available"}
          onRetry={onRetry}
          shouldRetry={!isSearchTerm}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }
  return (
    <FlatList
      data={products}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <ProductCard
          id={item.id}
          title={item.title}
          images={item.images}
          price={item.price}
          rating={item.rating}
          brand={item.brand}
          navigationFunc={navigationFunc}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 50 }}
    />
  );
};

export default ProductsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
