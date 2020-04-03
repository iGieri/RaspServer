import React from "react";
import { Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    title: {
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 17,
        fontFamily: "PressStart2P-Regular",
        color: "#A01C45",
    }
})

export default function Nav() {
    return <Text style={styles.title}>RaspServer</Text>;
}