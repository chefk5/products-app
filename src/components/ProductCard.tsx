import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ProductCardType, ProductDetails } from "../app/types";
import { colors, fontSizes, mainStyles } from "../styles/theme";
import { Image } from "expo-image";
import StyledText from "./common/styledText";
import { AntDesign } from "@expo/vector-icons";
import { MainNavigationProp, MainRoutes } from "../navigation/Types";

type ProductCardProps = ProductCardType & {
  navigationFunc: (id: number) => void;
};

const ProductCard = ({
  id,
  title,
  images,
  price,
  rating,
  brand,
  navigationFunc,
}: ProductCardProps) => {
  return (
    <Pressable style={styles.container} onPress={() => navigationFunc(id)}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: images[0] }}
          contentFit="cover"
          testID="product-image"
        />
      </View>
      <View style={styles.detailsCol}>
        <View>
          <StyledText size={fontSizes.md1} fontWeight="700">
            {title}
          </StyledText>
          <StyledText
            customStyles={{ marginTop: 5 }}
            color={colors.textTernary}
            size={fontSizes.md}
          >
            {brand}
          </StyledText>
        </View>

        <View style={styles.priceAndRatingRow}>
          <StyledText color={colors.TextSecondary} size={fontSizes.md1}>
            {price}$
          </StyledText>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <AntDesign name="star" size={24} color="gold" />
            <StyledText size={fontSizes.md}> {rating}</StyledText>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...mainStyles.marginH,
    ...mainStyles.marginV,
    flexDirection: "row",
  },
  image: {
    height: 135,
    width: 135,
    borderRadius: 15,
  },
  detailsCol: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
  },
  priceAndRatingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
