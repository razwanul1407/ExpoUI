import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";
import { styles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Open up App.js to start working on your app!</Text>
      <Button title="Next" onPress={()=>navigation.navigate("Splash")}/>
    </View>
  );
};

export default Home;