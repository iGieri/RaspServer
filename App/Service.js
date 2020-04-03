import React, { Component } from "react";
import { Text, View, StyleSheet, ToastAndroid } from "react-native";
import ServiceButton from "./ServiceButton";
import Nav from "./Nav";
import io from "socket.io-client";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignContent: "center"
    },
    service: {
        position: "relative",
        top: 20,
        fontSize: 15,
        textAlign: "center",
        fontFamily: "PressStart2P-Regular",
    },
    on: {
        color: "#32a852",
        fontFamily: "PressStart2P-Regular",
        position: "relative",
    },
    off: {
        color: "#d61111",
        fontFamily: "PressStart2P-Regular",
        position: "relative",
    },
    logTitle: {
        fontFamily: "PressStart2P-Regular",
        textAlign: "center",
        position: "relative",
        top: 50
    },
    console: {
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "PressStart2P-Regular",
        fontSize: 10,
        width: 300,
        paddingVertical: 20,
        paddingLeft: 20,
        borderRadius: 10,
        position: "relative",
        left: 25,
        top: 60
    }
});


export default class Service extends Component {

    constructor(props){
        super(props);
        this.state = {status: ""};
    }

    componentDidMount() {
        const socket = io("http://raspserver:3000");
        
        socket.emit("get", this.props.title);
        
        socket.on("get", msg => {
            msgs = msg.split(":");
            this.setState({status: msgs[0], console: msgs[1]})
            ToastAndroid.show("Data received", ToastAndroid.SHORT);
        })
    }

    render() {
        if (this.state.status == "ON") {
            return(
                <View style={styles.container}>
                    <Nav />
                    <ServiceButton title={this.props.title} image={this.props.image} noBorder={true}>{this.props.description}</ServiceButton>
                    <Text style={styles.service}>Service: <Text style={styles.on}>ON</Text></Text>
                    <Text style={styles.logTitle}>Console:</Text>
                    <Text style={styles.console}>{this.state.console}</Text>
                </View>
            );
        }

        else {
            return(
                <View style={styles.container}>
                    <Nav />
                    <ServiceButton title={this.props.title} image={this.props.image} noBorder={true}>{this.props.description}</ServiceButton>
                    <Text style={styles.service}>Service: <Text style={styles.off}>OFF</Text></Text>
                    <Text style={styles.logTitle}>Console:</Text>
                    <Text style={styles.console}>{this.state.console}</Text>
                </View>
            );
        }
    }
}