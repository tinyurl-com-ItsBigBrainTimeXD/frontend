import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import box from '../models/box.js';

export default function searchScreen({ navigation }) { 

  const [value, setName] = React.useState('');
  var isLocked = true;

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Search container */}
      <View style={styles.tallPageContainer}>
        <Text style={styles.pageContainerTitle}>Location</Text>
        <Text style={styles.searchText}>Name of item/box:</Text>
        <FormField onChangeText={text => setName(text)} />
      </View>

      <TouchableOpacity onPress={console.log("")} style={styles.buttonBorder}>
        <Text style={styles.buttonText}>Find its location</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={isLocked = true} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Lock</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={isLocked = false} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Unlock</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
