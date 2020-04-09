# RaspServer
> Everything that you need for your personal server

### What is this?
> RaspServer is composed by 2 big directories:

- App
- Server
  
#### App
> The App directory contains a React-Native Application that is compatible with Android and iOS.

> This app has a list of Services (programs like website or bots that you run in your server).

> When you select a Service, your phone send a socket to your server.

> Server reply with the status of your Service (ON or OFF) and its console (so you can check an error or something like this).

> Also you can turn on or off the Service you have selected.

#### Server
> The Server directory contains the script that you have to execute on your server.

> It manages the sockets and the services.

### How can I setup it for my server?

> First of all if you haven't already done, you have to install NodeJS. You can install it [here](https://nodejs.org/ "NodeJS").

> After you have installed it in your pc and in your server, use this command to clone this repository in your PC and in your server

> ``` $ git clone https://github.com/PyGera/RaspServer.git ```

#### App

> If this is the first time that you use React-Native, you should read [this](https://reactnative.dev/docs/environment-setup "React-Native Guide") guide to setup your environment.

> After you have setup React-Native on your pc, you have to change directory with this command

> ``` $ cd RaspServer/App ```

> Now you have to install all npm dependencies with this command

> ``` $ npm install ```

> Before you install the app on your phone, you should change the default server ip address. To do this, you have to change ``` raspserver:3000 ```, on line 83 of Service.js, with the ip address of your server and its port.

> If you have an **Android phone** you have to activate **Debug** on **Developers Settings**.

> Plug your phone into your PC by using an USB cable and run this command 

> ``` $ npm run android ```

> Now RaspServer is installed in your phone.

#### Server

> The first thing you have to do is change directory with the following command

> ``` $ cd RaspServer/Server ```

> Now you can install the npm dependencies with this command

> ``` $ npm install ```

> If you want you can change the port of your server, but if you change it, you have to change it also in your phone App

> Now you can launch the program with this command

> ``` $ node main.js ```

> **Tips**: you can use nodemon instead of node ; )

> Now we have a basic setup of RaspServer in our phone and in our server.

### How can I add my Services?

> To add your Services you have to change a lot of code in the App directory and in server directory twice. I'm working hard to make easily this for you.

#### App

> Open ``` App.js ``` and create a Service

> ``` const Website = <Service title="Portfolio" description="Website" image={require("./pathtoimg/logo.png")} />``` 

> Add your new Service in the navigator

``` 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={Home} />
        
        {/* This is the line that you have to add */}
        <Stack.Screen name="Website" component={Website} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
``` 

> Now we have to create a ServiceButton on the home page. Open ``` Home.js ``` and modify the following code

``` 
export default function Home({ navigation }) {
    return(
        <View>
            <Nav />

            {/* This is the ServiceButton of our new Service */}
            <ServiceButton onPress={() => navigation.navigate("Website")} topBorder={true} title="Portfolio" image={require("./pathtoimg/logo.png")}>Website</ServiceButton>
        </View>
    );
} 
```

> Now we should have configurated with success the Service on our App