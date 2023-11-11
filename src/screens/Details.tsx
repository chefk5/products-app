import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { colors, fontSizes, mainStyles } from "../styles/theme";
import StyledText from "../components/common/styledText";
import { ProductDetails } from "../app/types";
import { RouteProp } from "@react-navigation/native";
import {
  MainStackParamList,
  MainRoutes,
  MainNavigationProp,
} from "../navigation/Types";
import { Image } from "expo-image";

type DetailsRouteProp = RouteProp<MainStackParamList, MainRoutes.Details>;

type DetailsProps = {
  navigation: MainNavigationProp<MainRoutes.Details>;
  route: DetailsRouteProp;
};
const { height } = Dimensions.get("window");

const Details = ({ navigation, route }: DetailsProps) => {
  const [containerHeight, setContainerHeight] = useState(0);

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setContainerHeight(contentHeight);
  };

  return (
    <ScrollView
      onContentSizeChange={onContentSizeChange}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
      scrollEnabled={containerHeight > height - 100}
    >
      <View style={styles.header}>
        <StyledText fontWeight="700" size={fontSizes.md2}>
          {route.params?.title}
          height {height}
        </StyledText>
        <StyledText color={colors.textTernary}>
          {route.params?.brand}
        </StyledText>
      </View>

      <Image
        style={styles.image}
        source={{ uri: route.params?.images[0] }}
        contentFit="cover"
      />
      <View style={styles.body}>
        <StyledText
          color={colors.TextSecondary}
          size={fontSizes.md1}
          customStyles={{ marginBottom: 10 }}
        >
          {route.params?.price}$
        </StyledText>
        <StyledText
          color={colors.textTernary}
          customStyles={{ marginBottom: 10 }}
        >
          Description
        </StyledText>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: fontSizes.md,
            fontWeight: "400",
          }}
        >
          {route.params?.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    height: 250,
    width: "100%",
  },
  header: {
    ...mainStyles.marginH,
    ...mainStyles.marginV,
  },
  body: {
    ...mainStyles.marginH,
    marginTop: 30,
  },
});
