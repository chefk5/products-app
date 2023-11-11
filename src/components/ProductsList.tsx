import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import ProductCard from "./ProductCard";
import { Product, ProductCardType } from "../app/types";
import { FlashList } from "@shopify/flash-list";
import { MainNavigationProp, MainRoutes } from "../navigation/Types";

interface IProductsList {
  products: Product[];
  navigationFunc: (id: number) => void;
}

const ProductsList = ({ products, navigationFunc }: IProductsList) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={products}
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
        estimatedItemSize={250}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
};

export default ProductsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
