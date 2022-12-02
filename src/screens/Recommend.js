import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Recommend({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F1F1F1'}}>
      <View style={{ marginTop: 37, marginLeft: 32 }}>
         <View style={{ width: 36, height: 36, zIndex: 2, backgroundColor: 'rgba(188, 218, 233, 0.8)', alignContent: 'center', alignItems: 'center', borderRadius: 10,}}>
          <Icon name="arrow-left" size={18} color="#000000" onPress={() => navigation.goBack()} style={{ zIndex: 10, marginTop: 7,opacity: 1.0}} />
        </View>
      </View>
     
      <View style={{ alignItems: 'center',}}>
        <Text style={{ fontSize: 27,fontWeight: '700', color: '#000000',}}>Rekomendasi</Text>
      </View>


      <ScrollView>
        {/* ---- */}
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
          {/*  bagian1  */}
          <TouchableOpacity onPress={() => navigation.navigate('Rajaampat')}>
            <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginRight: 10, marginTop: 46 }}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/wst1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
              <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Raja Ampat</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 45, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Papua barat</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          
          {/*  bagian2  */}
          <TouchableOpacity onPress={() => navigation.navigate('Pulaukomodo')}>
            <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginTop: 58}}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/pk1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                 <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Pulau Komodo</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 25, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Nusa Tenggara Timur</Text>
            </View>
          </View>
          </TouchableOpacity>
          
        </View>


        <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
          {/*  bagian3  */}
          <TouchableOpacity onPress={() => navigation.navigate('Nusapenida')}>
            <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginRight: 9, marginTop: 4 }}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/np1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                 <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Nusa Penida</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 40, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Bali</Text>
               </View>
            </View>
          </TouchableOpacity>
          
          
          {/*  bagian4  */}
          <TouchableOpacity onPress={() => navigation.navigate('Gunungrinjani')}>
            <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginTop: 15}}>
            <View style={{ marginLeft: 8, marginRight: 8, marginTop: 7 }}>
                  <Image source={require('../img/gr1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Gunung Rinjani</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 34, marginTop: 4 ,}} />
                </View>
               <Text style={{ color: '#B7B7B7', fontSize: 10, marginTop: 2, fontWeight: '400'}}>Nusa Tenggara Timur</Text>
               </View>
          </View>
           </TouchableOpacity>
          
        </View>
        










      </ScrollView>





    </View>
  )
}