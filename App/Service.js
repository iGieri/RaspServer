import React, { Component } from "react";
import { Text, View, StyleSheet, ToastAndroid } from "react-native";
import ServiceButton from "./ServiceButton";
import Nav from "./Nav";
import io from "socket.io-client";
import Button from "./Button";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
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
        width: 320,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        position: "relative",
    
        top: 60
    },
    turnOnButton: {
        position: "relative",
        top: 80,
        width: 57,
        textAlign: "center"
    },
    refreshButton: {
        position: "relative",
        top: 100,
        width: 57,
        textAlign: "center"
    },
    arrowButton: {
        position: "relative",
        top: 120,
        width: 57,
        textAlign: "center"
    },
});


class Service extends Component {

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
        const { navigation } = this.props;
        if (this.state.status == "ON") {
            return(
                <View style={styles.container}>
                    <Nav />
                    <ServiceButton title={this.props.title} image={this.props.image} noBorder={true}>{this.props.description}</ServiceButton>
                    <Text style={styles.service}>Service: <Text style={styles.on}>ON</Text></Text>
                    <Text style={styles.logTitle}>Console:</Text>
                    <Text style={styles.console}>{this.state.console}</Text>
                    <Button style={styles.turnOnButton}><Icon name="power-off" color="#ffffff" size={20} /></Button>
                    <Button style={styles.refreshButton}><Icon name="refresh" color="#ffffff" size={20} /></Button>
                    <Button style={styles.arrowButton}><Icon name="arrow-left" color="#ffffff" size={20} /></Button>
                </View>
            );
        }

        else {
            return(
                <View>
                    <Nav />
                    <ServiceButton title={this.props.title} image={this.props.image} noBorder={true}>{this.props.description}</ServiceButton>
                    <View style={styles.container}>
                        <Text style={styles.service}>Service: <Text style={styles.off}>OFF</Text></Text>
                        <Text style={styles.logTitle}>Console:</Text>
                        <Text style={styles.console}>{this.state.console}</Text>
                        <Button style={styles.turnOnButton}><Icon name="power-off" color="#ffffff" size={20} /></Button>
                        <Button style={styles.refreshButton}><Icon name="refresh" color="#ffffff" size={20} /></Button>
                        <Button onPress={() => {navigation.navigate("Home");}} style={styles.arrowButton}><Icon name="arrow-left" color="#ffffff" size={20} /></Button>
                    </View>
                </View>
            );
        }
    }
}

export default function(props) {
    const navigation = useNavigation();

    return <Service navigation={navigation} {...props} />
}