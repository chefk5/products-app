import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, searchProducts } from "../services/products";

import { colors } from "../styles/theme";
import { MainNavigationProp, MainRoutes } from "../navigation/Types";

import ProductsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";

interface ProductsProps {
  navigation: MainNavigationProp<MainRoutes.Products>;
}

const Products = ({ navigation }: ProductsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchValue = useDebounce(searchTerm, 400);

  const {
    isLoading,
    isError,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const {
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    data: searchedData = [],
  } = useQuery({
    queryKey: ["searchProducts", debouncedSearchValue], // Ensure the variable name matches the used one
    queryFn: () => searchProducts(debouncedSearchValue), // Wrap the searchProducts call in an arrow function
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

  const handleSearch = () => {
    searchProducts(searchTerm);
  };

  const setTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={null}
        searchTerm={searchTerm}
        setTerm={setTerm}
        handleSearch={handleSearch}
      />
      {data && (
        <>
          <ProductsList
            products={searchTerm ? searchedData : data}
            navigationFunc={openDetailsScreen}
            onRetry={refetch}
            isLoading={isLoadingSearch || isLoading}
            isError={isErrorSearch || isError}
            isSearchTerm={!!searchTerm}
          />
        </>
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
