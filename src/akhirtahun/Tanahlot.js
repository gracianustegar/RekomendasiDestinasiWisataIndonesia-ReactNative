import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Tanahlot({navigation}) {
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
        <Image  source={require('../img/tl1.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 1015, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Pura Tanah Lot</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Bali</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
            Pura Tanah Lot adalah salah satu Pura (Tempat Ibadah Umat Hindu) yang sangat disucikan di Bali, Indonesia. Di sini ada dua pura yang terletak di atas batu besar. Satu terletak di atas bongkahan batu dan satunya terletak di atas tebing mirip dengan Pura Uluwatu. Pura Tanah Lot ini merupakan bagian dari pura Dang Kahyangan. Pura Tanah Lot merupakan pura laut tempat pemujaan dewa-dewa penjaga laut. Tanah Lot terkenal sebagai tempat yang indah untuk melihat matahari terbenam. {'\n'}{'\n'} 

            Keunikan objek wisata Tanah Lot terdapat pada lokasi dua pura yang berada di atas tebing batu karang hitam yang berada pada pesisir pantai. Kedua pura menghadap ke lautan lepas samudra Hindia.{'\n'}{'\n'} 

            Satu pura di bangun tepat pada bagian atas batu karang hitam dengan ukuran sangat besar dan berada pada tepi pantai sebelah kiri. Pura ini lebih terkenal dengan nama pura Tanah Lot.{'\n'}{'\n'} 

            Pada saat pasang, air laut akan menutup area pantai dan membuat lokasi pura Tanah Lot terlihat berada di tengah lautan. Momen air laut pasang ini juga terlihat seperti sebuah kapal yang terbuat dari batu besar berwarna hitam terapung pada permukaan air laut.{'\n'}{'\n'} 

            Sedangkan pura yang kedua berada di pinggir tebing karang, yang juga berada di tengah laut pada sisi kanan kawasan pantai Tanah Lot. Di bawah tebing karang pada lokasi pura kedua terdapat lubang besar, yang selalu di lewati oleh gelombang ombak besar.{'\n'}{'\n'} 
            </Text>
          </View>
          
        </View>

       
      </View>
      
    </ScrollView>
  )
}