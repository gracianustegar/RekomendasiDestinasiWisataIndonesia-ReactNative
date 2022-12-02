import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Tamanbunganusantara1({navigation}) {
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
        <Image  source={require('../img/tamanbunganusantara.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 715, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Taman Bunga Nusantara</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Jawa Barat</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
        Taman Bunga Nusantara adalah sebuah taman bunga seluas 35 hektar yang terletak dekat Gunung Gede Pangrango dan Kebun Teh Bogor dengan jarak tempuh sekitar 2,5 - 3 jam perjalanan dari Jakarta, tepatnya berada di antara dua desa yaitu, Kawungluwuk, Sukaresmi, Cianjur dengan Sukawangi, Sukamakmur, Jonggol.{'\n'}{'\n'}
                          
        Pembangunan Taman Bunga Nusantara bertujuan untuk menciptakan aset wisata agro nasional dengan skala internasional. Itulah kenapa di Taman Bunga Nusantara, kamu bakal menemukan banyak jenis bunga. Baik yang dari Indonesia, Asia, Australia, Amerika, hingga Afrika. Bunga-bunga tersebut ditata secantik mungkin pada taman-taman yang tersedia.{'\n'}{'\n'}
                          
        Daya tarik Taman Bunga Nusantara terletak pada wahana atau objek-objek yang menarik, diantaranya Taman Rahasia (Labirin), Taman Bali, Taman Jepang, Taman Prancis, Taman Amerika, Taman Mediterania, Taman Palem, Rumah Kaca, Taman Mawar, Taman Air, dan Jam Tangan Raksasa.               
            </Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}