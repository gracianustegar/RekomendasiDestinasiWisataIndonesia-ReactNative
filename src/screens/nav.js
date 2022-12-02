import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <TouchableOpacity  onPress={() => navigation.navigate('Recommend')}>
              <Text>Home </Text>
          </TouchableOpacity>
      
    </View>
  )
}