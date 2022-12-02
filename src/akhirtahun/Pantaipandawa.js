import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Pantaipandawa({navigation}) {
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
        <Image  source={require('../img/pdw.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 815, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Pantai Pandawa</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Bali</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
            Pantai Pandawa adalah salah satu kawasan wisata di area Kuta selatan, Kabupaten Badung, Bali. Pantai ini terletak di balik perbukitan dan sering disebut sebagai Pantai Rahasia (Secret Beach). Di sekitar pantai ini terdapat dua tebing yang sangat besar yang pada salah satu sisinya dipahat lima patung Pandawa dan Kunti. Keenam patung tersebut secara berurutan (dari posisi tertinggi) diberi penjelasan nama Dewi Kunti, Dharmawangsa, Bima, Arjuna, Nakula, dan Sadewa.{'\n'}{'\n'}
                          
            Pantai ini sangat cocok untuk wisatawan yang datang ke Bali bersama keluarga, kerabat maupun yang datang bersama teman-teman. Wisatawan yang datang akan dimanjakan oleh pancaran sinar matahari yang langsung mengarah ke pantai ini dan cocok untuk berjemur. Inilah mengapa banyak wisatawan dari berbagai kota maupun wisatawan mancanegara datang ke pantai ini.{'\n'}{'\n'}
                          
            Selain untuk tujuan wisata dan olahraga air, pantai ini juga dimanfaatkan untuk budidaya rumput laut karena kontur pantai yang landai dan ombak yang tidak sampai ke garis pantai. Cukup banyak wisatawan yang melakukan paralayang dari Bukit Timbis hingga ke Pantai Pandawa.{'\n'}{'\n'}

            </Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}