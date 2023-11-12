import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { mainStyles } from "../styles/theme";

const SearchBar = ({ onSearch, setTerm, handleSearch, searchTerm }: any) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        style={styles.container}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={(term) => setTerm(term)}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    ...mainStyles.marginH,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    padding: 5,
    borderRadius: 10,
  },
});
