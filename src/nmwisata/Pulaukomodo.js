import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Pulaukomodo({navigation}) {
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
        <Image  source={require('../img/pulaukomodo.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 615, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Pulau Komodo</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Nusa Tenggara Timur</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>Destinasi lainnya yang juga mendapat pengakuan dari UNESCO adalah Pulau Komodo. Seperti namanya, Anda bisa menemukan komodo berlarian di Taman Nasional Komodo.{'\n'}{'\n'}
              
            Taman nasional ini sendiri terdiri dari beberapa pulau kecil. Tidak hanya komodo, pulau-pulau ini juga menawarkan berbagai keindahan bahari, seperti terumbu karang, lumba-lumba, penyu hijau, paus, hiu, dan juga ikan pari.{'\n'}{'\n'}

            Mengunjungi Pulau Komodo pun tidak akan lengkap tanpa menikmati trekking dan aktivitas mendaki lainnya. Tempat rekreasi ini memang menjadi pilihan terbaik untuk menikmati keindahan hewan yang langka. Oleh karena itu, pastikan Anda berada dalam kondisi fit apabila berlibur ke tempat ini.</Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}