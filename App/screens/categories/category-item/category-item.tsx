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

export const CategoryItem: TCategoryItem = ({ item, onGoToCategoryMeals }) => {
  const { id: categoryId, title, color } = item;

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
        <View style={styles.textWrap}>
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
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  touchableWrap: {
    flexGrow: 1,
  },
  textWrap: {
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
