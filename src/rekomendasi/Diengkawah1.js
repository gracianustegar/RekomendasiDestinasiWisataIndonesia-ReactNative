import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Diengkawah1({navigation}) {
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
        <Image  source={require('../img/diengkawah.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 915, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Dieng Kawah</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Jawa Tengah</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
              Kawah Sikidang merupakan lapangan perkawahan di Dataran Tinggi Dieng yang berada paling dekat dengan kawasan percandian Dieng, mudah dicapai, dan dinikmati karena terletak di tanah datar.{'\n'}{'\n'}
              
              Kawah ini terletak di Desa Dieng Kulon, Kabupaten Banjarnegara. Posisinya berada di sebelah timur dari Bukit Pangonan, berdekatan dengan Kawah Sibanteng dan Kawah Upas-Luwuk.{'\n'}{'\n'}
              
              Di kawasan ini terdapat penyewaan alat bermain seperti sepeda, motor cross, ATV dan Kuda. Para wisatawan dapat berkeliling menikmati pemandangan Kawah Sikidang dengan menaiki salah satunya.{'\n'}{'\n'}
            
              Kawah Sikidang merupakan lapangan perkawahan di Dataran Tinggi Dieng yang berada paling dekat dengan kawasan percandian Dieng, mudah dicapai, dan dinikmati karena terletak di tanah datar.{'\n'}{'\n'}
            
              Di area Kawah Sikidang juga banyak yang menjual pernak-pernik khas Dieng. Seperti bunga edelweis, baju, penutup kepala, dan lain-lain. Di area Kawah Sikidang juga terdapat banyak warung yang menjajakan makanan khas Dieng, seperti tempe kemul, carica, minuman purwaceng dan masih banyak lagi.</Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}