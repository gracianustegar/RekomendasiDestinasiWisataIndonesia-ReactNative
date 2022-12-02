import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Spesial({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F1F1F1'}}>
      <View style={{ marginTop: 37, marginLeft: 32 }}>
         <View style={{ width: 36, height: 36, zIndex: 2, backgroundColor: 'rgba(188, 218, 233, 0.8)', alignContent: 'center', alignItems: 'center', borderRadius: 10,}}>
          <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ zIndex: 10, marginTop: 7,opacity: 1.0}} />
        </View>
      </View>
     
      <View style={{ alignItems: 'center',}}>
        <Text style={{ fontSize: 27,fontWeight: '700', color: '#000000',}}>Spesial</Text>
      </View>


      <ScrollView>
        {/* ---- */}
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
          {/*  bagian1  */}
          <TouchableOpacity onPress={() => navigation.navigate('Diengkawah1')}>
            <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginRight: 10, marginTop: 46 }}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/dk1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
              <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                   <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Dieng Kawah</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 35, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Tengah</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          
                  {/*  bagian2  */}
                  <TouchableOpacity onPress={() => navigation.navigate('Telagasarangan1')}>
                      
                  
          <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginTop: 58}}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/sr1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                   <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Telaga Sarangan</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 8, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Timur</Text>
            </View>
                  </View>
                  </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
          {/*  bagian3  */}
          <TouchableOpacity onPress={() => navigation.navigate('Tamanbunganusantara1')}>
            <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginRight: 9, marginTop: 4 }}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/tbn1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 4, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Taman Bunga Nusantara</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 25, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -4, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Barat</Text>
               </View>
            </View>
          </TouchableOpacity>
          
          
                  {/*  bagian4  */}
                   <TouchableOpacity onPress={() => navigation.navigate('Kawahputih1')}>
          <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginTop: 15}}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/kp1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Kawah Putih</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 52, marginTop: 4 ,}} />
                </View>
               <Text style={{ color: '#B7B7B7', fontSize: 10, marginTop: 2, fontWeight: '400'}}>Jawa Barat</Text>
               </View>
                      </View>
                  </TouchableOpacity>
        </View>
        










      </ScrollView>





    </View>
  )
}