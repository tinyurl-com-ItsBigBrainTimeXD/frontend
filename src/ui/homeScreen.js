import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import DATA  from "../../data/dummyBoxData.js";

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Box data", { boxName: item.getName() })} style={[styles.card, style]}>
    <Image
        style={styles.image}
        source={require("../../assets/box.png")}
      />
    <Text style={styles.cardText}> {item.getName()} </Text>
  </TouchableOpacity>
);

const renderItem = ({ item }, navigation) => {
  return (<Item item={item} navigation={navigation}/>);
};

export default function homeScreen({ navigation }) { 

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add a box button */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Add a box', {data: DATA})} style={styles.button}>
          <Text style={styles.buttonText}>Add a box</Text>
        </TouchableOpacity>
      </View>

      {/* My Boxes container */}
      <View style={styles.pageContainer}>
        <Text style={styles.pageContainerTitle}>My Boxes</Text>
        <FlatList
          data={DATA}
          renderItem={(item) => renderItem(item, navigation)}
          keyExtractor={(item) => item.getId().toString()}
        />
      </View>

    </View>
  );
}
