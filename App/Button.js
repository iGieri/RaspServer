import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A01C45",
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    text: {
        textAlign: "center",
        fontSize: 13,
        color: "white",
        fontFamily: "PressStart2P-Regular"
    }
})

export default function Button(props) {
    return (
        <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <Text style={[styles.text, props.styleText]}>{props.children}</Text>
        </TouchableOpacity>
    );
}