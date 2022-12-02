import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Rajaampat({navigation}) {
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
        <Image  source={require('../img/rajaampat.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 615, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Raja Ampat</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Papua Barat</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>Raja Ampat merupakan tempat wisata terkenal di indonesia. Bahkan beberapa travellers menyebutnya sebagai surga untuk para petualang yang ada di ujung timur Indonesia.{'\n'}{'\n'}
              
            Tempat ini sendiri merupakan gugusan beberapa pulau kecil yang datarannya tinggi. Di bawahnya terdapat pantai biru yang membentang cantik. Oleh karena itu, wisatawan sangat menikmati pemandangan alam yang paripurna ini dari atas.{'\n'}{'\n'}
              
            Apabila Anda punya sertifikat diving, jangan lupa untuk menjadi saksi keindahan dunia bawah laut yang tidak akan Anda temukan di tempat lain mana pun. Memang, budget yang Anda siapkan untuk berlibur ke sini agak mahal daripada destinasi lainnya. Namun harga tersebut setimpal dengan keindahan Raja Ampat.</Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}