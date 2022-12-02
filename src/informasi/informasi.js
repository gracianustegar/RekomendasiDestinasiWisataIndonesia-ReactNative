import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Informasi({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, }}>
      
      <View style={{ marginLeft: 32, marginTop: 35}}>
        <View style={{
          width: 36, height: 36, zIndex: 2,
          backgroundColor: 'rgba(188, 218, 233, 0.8)', alignContent: 'center', alignItems: 'center', borderRadius: 10,
        }}>
          <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ zIndex: 10, marginTop: 7,opacity: 1.0}} />
        </View>
      </View>
        
           {/* img + nama */}
        <View style={{alignItems: 'center',}}>
            <Image source={require('../img/profil1.png')}
              style={styles.img}/>
            <Text style={styles.username}>Gracianus Tegar</Text>
          </View>
      
        
        <View>
          <Text style={styles.text}>Saya dari SMKN 2 Surakarta, kelas XII RPL B dan saya selaku pembuat aplikasi Rekomendasi Destinasi Wisata Indonesia.{'\n'}{'\n'}
            
            Harapan saya, aplikasi ini dapat membantu pengguna menemukan Tempat Destinasi Wisata Indonesia.{'\n'}{'\n'}
          
            Saya mengucapkan terima kasih karena telah menggunakan aplikasi ini, semoga pengguna dapat menemukan Destinasi Wisata Indonesia dan dapat mengunjungi tempat tersebut.</Text>
        </View>

    </ScrollView>
    )
}

const styles = StyleSheet.create({
  

  username: {
    fontSize: 20,
    color: '#000',
    marginTop: 15, 
    fontFamily: 'Poppins-Medium'
  },

  img: {
    width: 128,
    height: 128,
    marginTop: 30,
    borderWidth: 7,
    borderColor: '#fff',
    borderRadius: 70,
    shadowOffset: 100,
  },

  text: {
    color: '#767676',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    marginTop: 30,
  }
})

