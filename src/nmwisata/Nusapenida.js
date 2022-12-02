import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Nusapenida({navigation}) {
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
          
      
      <View>
        <Image  source={require('../img/nusapenida.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 615, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Nusa Penida</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Bali</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify',lineHeight: 20, letterSpacing: 0.6,}}>Salah satu wisata terindah di Indonesia yang terletak di Bali adalah Nusa Penida. Gambar wisata tempat ini merupakan pulau kecil yang terletak di seberang Pulau Dewata, masuk Kabupaten Klungkung.{'\n'}{'\n'}

            Apabila Anda menyukai scuba diving dan snorkeling, pulau ini cocok untuk Anda kunjungi. Dibandingkan dengan Nusa-Nusa lainnya, Nusa Penida berkembang lebih lambat. Sehingga kondisi pulau ini cenderung lebih sepi juga.{'\n'}{'\n'}

            Namun tentu saja ini sebuah keuntungan untuk wisatawan yang menikmati keindahan dalam ketenangan.</Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}