import React, { useState, Component } from "react";
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import Button from "./Button";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 170,
    },
    title: {
        fontFamily: "PressStart2P-Regular",
        color: "#A01C45",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 50
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30
    },
});

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.sequence([
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                }
            ),
            // Animated.delay(1000),
            // Animated.timing(
            //     fadeAnim,
            //     {
            //         toValue: 0,
            //         duration: 1000,
            //     }
            // )
        ]).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
        style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
        }}
        >
        {props.children}
        </Animated.View>
    );
}

export default function Loading({ navigation }) {
    return(
        <View style={styles.container}>
            <FadeInView>
                <Image source={require("./images/logo.png")} style={styles.logo} />
                <Text style={styles.title}>RaspServer</Text>
                <Button onPress={() => navigation.navigate("Home")} style={styles.button}>Enter</Button>
            </FadeInView>
        </View>
    );
}