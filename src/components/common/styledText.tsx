import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fontSizes } from "../../styles/theme";

type Props = {
  children: React.ReactNode;
  size?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  color?: string;
  customStyles?: object;
};

const StyledText = (props: Props) => {
  const { children, size, fontWeight, color, customStyles } = props;
  return (
    <View>
      <Text
        numberOfLines={2}
        style={[
          styles.text,
          { ...customStyles },
          { color: color || colors.textPrimary },
          { fontSize: size || fontSizes.md },
          { fontWeight: fontWeight || "500" },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary,
  },
});
