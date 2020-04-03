import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ServiceButton from "./ServiceButton";
import Nav from "./Nav";

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

export default function Home({ navigation }) {
    return(
        <View>
            <Nav />
            <ServiceButton onPress={() => navigation.navigate("Gabbot")} topBorder={true} title="Gabbot" image={require("./images/gabboh.jpeg")}>Discord Bot</ServiceButton>
        </View>
    );
}