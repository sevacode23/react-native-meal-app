import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Platform,
  View,
  Dimensions,
} from "react-native";

import { TCategoryItem } from "./category-item.typing";

const sizes = Dimensions.get("window");

export const CategoryItem: TCategoryItem = ({
  itemData,
  onGoToCategoryMeals,
}) => {
  const { id: categoryId, title, color } = itemData.item;

  let TouchableComponent =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={{ ...styles.root, backgroundColor: color }}>
      {/* @ts-ignore */}
      <TouchableComponent
        onPress={onGoToCategoryMeals.bind(this, categoryId)}
        style={styles.touchableWrap}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 15,
    height: sizes.width < 350 ? 120 : 150,
  },
  touchableWrap: {
    flexGrow: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 12,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: sizes.width < 350 ? 16 : 18,
    textAlign: "right",
  },
});
