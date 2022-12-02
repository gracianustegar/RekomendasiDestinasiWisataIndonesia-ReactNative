import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Pantaisumba({navigation}) {
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
        <Image  source={require('../img/pts.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 715, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Pantai Walakiri Sumba</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Nusa Tenggara Timur</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
                          Pantai Walakiri adalah salah satu pantai indah di Sumba Timur dengan ciri khas pantai di Sumba yang cenderung tenang, landai dengan hamparan pasir putihnya.{'\n'}{'\n'}
                          
                          Pantai Walakiri, secara administratif berada pada wilayah Watumbaka, Pandawai, Kabupaten Sumba Timur, Nusa Tenggara Timur.{'\n'}{'\n'}
                      
                          Panorama yang disajikan Pantai Walakiri memang sangat cantik. Walakiri memiliki mangrove yang cukup unik, dengan suguhan hamparan pasir putih yang dihiasi jajaran pohon kelapa, memberi keteduhan dan suasana nyaman saat pengunjung berjalan menyusuri pantai.{'\n'}{'\n'}
                      
Ketika laut surut, pengunjung bisa berjalan jauh dari tepi pantai seraya menikmati keindahan mangrove lebih dekat, mangrove di sana ada yang besar dan kecil. Uniknya mangrove yang kecil, rantingnya kecil-kecil dan daunnya belum terlalu rimbun. Rantingnya meliuk-liuk seakan-akan pohon mangrove ini sedang menari.{'\n'}{'\n'}


            </Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}