import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Telagasarangan1({navigation}) {
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
        <Image  source={require('../img/telagasarangan.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 715, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Telaga Sarangan</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Jawa Timur</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
        Telaga Sarangan, juga dikenal sebagai Telaga Pasir adalah telaga alami yang berada di ketinggian 1.200 meter di atas permukaan laut dan terletak di lereng Gunung Lawu, Kecamatan Plaosan, Kabupaten Magetan, Jawa Timur.{'\n'}{'\n'}
        
        Disamping menikmati keindahan Telaga Sarangan, sobat wisata tentu akan merasa puas jika naik speedboat. Tidak perlu biaya mahal untuk bisa menaiki speedboat ini. Menikmati jernihnya air danau dengan sangat dekat sambil menaiki speedboat akan menjadi pengalaman yang tak terlupakan.{'\n'}{'\n'}

        Alternatif lain yang bisa sobat lakukan yakni dengan mencoba berkeliling Telaga Sarangan dengan menaiki kuda. Pemandu wisata Akan membawa kuda-kuda ini agar para pengunjung dapat berkeliling sepajang telaga.{'\n'}{'\n'}
 
        Tidak hanya menawarkan wisata dan tamasya keindahan alamnya saja, Telaga Sarangan juga menawarkan restoran yang akan membuat kenyang isi perut Anda. 

            </Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}