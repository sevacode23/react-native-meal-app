import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
} from "react-native";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { TMealItem } from "./meal-item.typing";

export const MealItem: TMealItem = ({ meal, onMealTap }) => {
  const TouchableComponent =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const handleTap = () => {
    onMealTap(meal.id);
  };

  return (
    <View style={styles.root}>
      {/* @ts-expect-error */}
      <TouchableComponent style={styles.touchableWrap} onPress={handleTap}>
        <View style={styles.headerDiv}>
          <ImageBackground style={styles.image} source={{ uri: meal.imageUrl }}>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>{meal.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.infoDiv}>
          <Text style={[styles.infoText, styles.infoTextDuration]}>
            {meal.duration}m
          </Text>
          <Text style={styles.infoText}>{meal.complexity}</Text>
          <Text style={styles.infoText}>{meal.affordability}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 190,
    marginVertical: 6,
    borderRadius: 10,
    overflow: "hidden",
  },
  touchableWrap: {},
  headerDiv: {
    height: "80%",
  },
  image: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  titleWrap: {
    paddingVertical: 8,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  infoDiv: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#f2e9e9",
  },
  infoText: {
    fontFamily: "open-sans",
    textTransform: "uppercase",
    fontSize: 15,
  },
  infoTextDuration: {
    textTransform: "lowercase",
  },
});
