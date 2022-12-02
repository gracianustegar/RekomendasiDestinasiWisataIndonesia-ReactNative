import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView , } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Gunungrinjani({navigation}) {
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
        <Image  source={require('../img/gr.png')} style={{ width: '100%', height: 481, marginTop: -71}} />
        </View>
        
      
     
      
      <View style={{ backgroundColor: '#FBFBFB', width: '100%', height: 1215, marginTop: -10, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
        <View style={{ marginLeft: 33, marginTop: 30, marginRight: 33 }}>
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#000000', letterSpacing: 1 }}>Gunung Rinjani</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 4, color: '#B7B7B7', letterSpacing: 1.5 }}>Nusa Tenggara Timur</Text>
          <Text style={{ color: '#000000', fontSize: 17, letterSpacing: 1, fontWeight: '800', marginTop: 54 }}>Deskripsi</Text>
          <View style={{ marginTop: 11,   }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#B7B7B7', textAlign: 'justify', lineHeight: 20, letterSpacing: 0.6, }}>
                Gunung Rinjani adalah gunung yang berlokasi di Pulau Lombok, Nusa Tenggara Barat. Gunung yang merupakan gunung berapi kedua tertinggi di Indonesia dengan ketinggian 3.726 mdpl serta terletak pada lintang 8º25' LS dan 116º28' BT ini merupakan gunung favorit bagi pendaki Indonesia karena keindahan pemandangannya. Gunung ini merupakan bagian dari Taman Nasional Gunung Rinjani yang memiliki luas sekitar 41.330 ha dan ini akan diusulkan penambahannya sehingga menjadi 76.000 ha ke arah barat dan timur.{'\n'}{'\n'}

                Secara administratif gunung ini berada dalam wilayah tiga kabupaten: Lombok Timur, Lombok Tengah, dan Lombok Utara. {'\n'}{'\n'}
                          
                Keindahan Gunung Rinjani memang tak dapat diungkapkan dengan kata-kata. Baik di pagi hari, siang hari, sore hari, serta malam hari, pesona Gunung Rinjani selalu terlihat dengan megahnya. Terutama di malam hari, dimana Anda akan melihat keindahan langit yang bertabur bintang. Apalagi jika Anda memandangnya sambil tiduran di luar tenda Anda, hmmm…bagaikan indah berselimutkan bintang-bintang yang gemerlapan..sungguh suatu pengalaman yang tak akan terlupakan pastinya{'\n'}{'\n'}
                          

                Salah satu tempat yang tidak dilewatkan para pendaki dalam pendakian Gunung Rinjani adalah Danau Segara Anak. Ya, danau cantik ini bisa ditemukan setelah menempuh pendakian melalui dua jalur, yaitu Jalur Pendakian Sembalun dan Jalur Pendakian Senaru. Untuk mencapai Danau Segara Anak dari Jalur Pendakian Sembalun, memerlukan waktu sekitar minimal 8 jam, sedangkan melalui Jalur Pendakian Senaru, memerlukan waktu sekitar minimal 7 jam. Di sekitar Danau Segara Anak, biasanya orang melakukan beberapa kegiatan seperti berkemah, berendam di air belerang yang hangat, dan juga memancing ikan. Untuk mencapai danau ini, memang waktunya tidak sebentar, namun Anda tidak akan menyesal jika sudah melihat keindahannya.{'\n'}{'\n'}
            </Text>
          </View>
          
        </View>

        
      </View>
      
    </ScrollView>
  )
}