import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StyledText from "./common/styledText";
import { colors, fontSizes } from "../styles/theme";
type ErrorComponentProps = {
  onRetry: () => void; // Define the type for onRetry
};
const ErrorComponent = ({ onRetry }: ErrorComponentProps) => {
  return (
    <View style={styles.container}>
      <StyledText
        color={colors.textPrimary}
        size={fontSizes.md}
        customStyles={styles.errorMessage}
      >
        Error fetching data from the server.
      </StyledText>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    marginBottom: 20,
  },
  retryButton: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  retryText: {
    color: "white",
    fontSize: 16,
  },
});

export default ErrorComponent;
