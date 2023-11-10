import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import ProductCard from "./ProductCard";
import { Product, ProductCardType } from "../app/types";
import { FlashList } from "@shopify/flash-list";

interface IProductsList {
  products: Product[];
}

const ProductsList: React.FC<IProductsList> = ({ products }) => {
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
          />
        )}
        estimatedItemSize={250}
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
