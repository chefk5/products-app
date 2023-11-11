import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { colors } from "../styles/theme";

const Loader = () => {
  const colorMode = "light";
  return (
    <View>
      <MotiView
        transition={{
          type: "timing",
        }}
        style={[styles.container, styles.padded]}
        animate={{ backgroundColor: colors.background }}
      >
        <Spacer height={8} />
        <Skeleton colorMode={colorMode} width={"100%"} height={130} />
        <Spacer height={10} />
        <Skeleton colorMode={colorMode} width={"100%"} height={130} />
        <Spacer height={10} />
        <Skeleton colorMode={colorMode} width={"100%"} height={130} />
        <Spacer height={10} />
        <Skeleton colorMode={colorMode} width={"100%"} height={130} />
        <Spacer height={10} />
        <Skeleton colorMode={colorMode} width={"100%"} height={130} />
      </MotiView>
    </View>
  );
};

// eslint-disable-next-line react/prop-types
const Spacer = ({ height = 16 }) => <View style={{ height }} />;

export default Loader;

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
  },
  padded: {
    padding: 16,
  },
});
