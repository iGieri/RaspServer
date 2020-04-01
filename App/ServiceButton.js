import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    button: {
        paddingTop: 10,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 100
    },
    button2: {
        paddingTop: 10,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: "grey",
        borderTopWidth: StyleSheet.hairlineWidth,
        height: 100
    },
    title: {
        fontSize: 18,
        fontFamily: "Arial",
        fontWeight: "bold",
        position: "relative",
        left: 165,
        bottom: 60
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 300,
        position: "relative",
        left: 15
    },
    description: {
        position: "relative",
        left: 158,
        bottom: 55
    }
})

export default function Button(props) {
    if (props.topBorder) {
        return (
            <TouchableOpacity style={[styles.button2, props.style]} onPress={props.onPress}>
                <Image source={props.image} style={styles.image} />
                <Text style={[styles.title, props.styleTitle]}>{props.title}</Text>
                <Text style={[styles.description, props.styleDescription]}>{props.children}</Text>
            </TouchableOpacity>
        );
    }

    else {
        return (
            <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
                <Image source={props.image} style={styles.image} />
                <Text style={[styles.title, props.styleTitle]}>{props.title}</Text>
                <Text style={[styles.description, props.styleDescription]}>{props.children}</Text>
            </TouchableOpacity>
        );
    }
    
}