import React from "react";
import { View } from "react-native";

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center", // Primary Axis (x-axis)
                alignItems: "center", // Cross Axis (y-axis)
            }}
        >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    width: 100,
                    height: 300,
                }}
            />
            <View
                style={{ backgroundColor: "gold", width: 100, height: 200 }}
            />
            <View
                style={{ backgroundColor: "tomato", width: 100, height: 100 }}
            />
        </View>
    );
}
