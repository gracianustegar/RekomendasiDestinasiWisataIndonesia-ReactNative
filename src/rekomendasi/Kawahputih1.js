import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Kawahputih1({navigation}) {
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
        <Image  source={require('../img/kp.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 815, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Kawah Putih</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Jawa Barat</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
              Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih merupakan sebuah danau yang terbentuk dari letusan Gunung Patuha.{'\n'}{'\n'}
              
              Tanah yang bercampur belerang di sekitar kawah ini berwarna putih, lalu warna air yang berada di kawah ini berwarna putih kehijauan, yang unik dari kawah ini adalah airnya kadang berubah warna. Danau Kawah Putih sendiri berada pada ketinggian 2194 m tapi luas total Danau Kawah Putih 25 ha yang dipakai wisata 5 ha dan lokasi kawah sendiri 3 ha.{'\n'}{'\n'}

              Perairannya yang berwarna biru kristal berubah dengan kondisi cuaca, dan dilapisi dengan pasir putih halus, memberikan pengunjung pengalaman dunia lain. Bahkan vegetasi di sekitar area ini sangat berbeda dengan yang di bawah.{'\n'}{'\n'}           

              Selain untuk dinikmati keindahannya oleh para wisatawan,Kawah Putih Bandung juga sering kali menjadi tempat kegiatan lain,misalnya pengambilan gambar, film ,melukis ,foto pengantin ,sampai dengan kegiatan mendaki dan berkuda.{'\n'}{'\n'}           
            </Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}