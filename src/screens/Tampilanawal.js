import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PixelRatio } from 'react-native';
import Iicon from 'react-native-vector-icons/Ionicons';


export default function Tampilanawal({navigation}) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1',}}>
            
        <View style={{ marginLeft: 32, marginTop: 40 }}>
          <View style={{ flexDirection: 'row'}}>
            <Text style={{ fontSize: 35, fontWeight: '700', color: 'black', marginLeft: -6, lineHeight: 45 }} > Hello, </Text>
            <Iicon name="information-circle-outline" color="black" size={20} style={{ marginLeft: 220, marginTop: 10}} />
            
            
          </View>
        
        <Text style={{ fontSize: 16, fontWeight: '400', color: '#767676', lineHeight: 20}} > Bagaimana kabarmu hari ini ?</Text>
        </View>
            
        <View style={{ flexDirection: 'row', marginTop: 70,}}>
          <Text style={{ fontWeight: '400', fontSize: 17, color: '#000000', marginLeft: 35 }}>Recommended</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Recommend')}>
            <Text style={{ fontWeight: '400', fontSize: 14, color: '#B7B7B7', marginLeft: 180}}>See All</Text>
          </TouchableOpacity>
          
        </View>

         <View style={{flexDirection: 'row', marginTop: 20}}>
        <ScrollView
          horizontal={true}
              showsHorizontalScrollIndicator={false}>
            {/* namatempat1 */}
          <View>
            <TouchableOpacity style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              marginTop: 20,
              marginLeft: 28,
              }} onPress={() => navigation.navigate('Rajaampat')}>
                <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/wst1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Raja Ampat</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 55, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#B7B7B7', fontSize: 10, marginTop: 2, fontWeight: '400'}}>Papua barat</Text>
               </View>
              </TouchableOpacity>
            </View>

            
            {/* namatempat2 */}
          <View>
            <TouchableOpacity style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              marginTop: 20,
              marginLeft: 20,
              }} onPress={() => navigation.navigate('Rajaampat')}>
                <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/pk1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Pulau Komodo</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 35, marginTop: 4 ,}} />
                </View>
               <Text style={{ color: '#B7B7B7', fontSize: 10, marginTop: 2, fontWeight: '400'}}>Nusa Tenggara Timur</Text>
               </View>
              </TouchableOpacity>
            </View>
           
              

            
            {/* namatempat3 */}
          <View>
            <TouchableOpacity style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              marginTop: 20,
              marginLeft: 20,
              }} onPress={() => navigation.navigate('Rajaampat')}>
                <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/np1.png')} style={{width: 149, height: 135, borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 14, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Nusa Penida</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 45, marginTop: 4 ,}} />
                </View>
               <Text style={{ color: '#B7B7B7', fontSize: 10, marginTop: 2, fontWeight: '400'}}>Bali</Text>
               </View>
              </TouchableOpacity>
            </View>
           
              
        
         {/* namatempat */}
          <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginTop: 20, marginLeft: 20}}>
              </View>
              
         {/* namatempat */}
          <View style={{ backgroundColor: '#ffffff', width: 165, height: 210, borderRadius: 10, marginTop: 20, marginLeft: 20}}>
          </View>
          
          </ScrollView>
        </View>

        
        <View style={{ flexDirection: 'row', marginTop: 35, }}>
          <Text style={{ fontWeight: '400', fontSize: 17, color: '#000000', marginLeft: 35, }}>Provinsi dan Kota</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: '400', fontSize: 14, color: '#B7B7B7', marginLeft: 160}}>See All</Text>
          </TouchableOpacity>
        </View>

       <View style={{flexDirection: 'row', marginTop: 25}}>
        <ScrollView
          horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/*  */}
          <View style={{ backgroundColor: '#FFFFFF', width: 150, height: 70, borderRadius: 10, marginLeft: 30, }}>
            <View style={{ marginTop: 18, marginLeft: 15}}>
              <Text style={{fontSize: 12,fontWeight: '600', color: '#000000'}}>Jawa Tengah</Text>
            <Text style={{fontSize: 12,fontWeight: '400', color: '#B7B7B7', marginTop: 2}}>Kota Solo</Text>
            </View>
            </View>
            
            {/*  */}
          <View style={{ backgroundColor: '#FFFFFF', width: 150, height: 70, borderRadius: 10, marginLeft: 10, }}>
            <View style={{ marginTop: 18, marginLeft: 15}}>
              <Text style={{fontSize: 12,fontWeight: '600', color: '#000000'}}>Jawa Tengah</Text>
            <Text style={{fontSize: 12,fontWeight: '400', color: '#B7B7B7', marginTop: 2}}>Kota Semarang</Text>
            </View>
            </View>
            
            
          
            




          </ScrollView>
        </View>
        

        
          
          <Text style={{ fontWeight: '400', fontSize: 17, color: '#000000', marginLeft: 35, marginTop: 38, }}>Special for you</Text>
          
        {/* ---1--- */}
          <View style={{alignItems: 'center' , }}>
          <View style={{ width: 320, height: 85, borderRadius: 10, backgroundColor: '#FFFFFF', marginLeft: 32, marginRight: 32, marginTop: 20,  }} >
            <View style={{ marginLeft: 115 }}>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000000', }}>Nama Tempat</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 80, marginTop: 4 }} />
              </View>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#B7B7B7', }}>Nm provinsi/kota</Text>
           </View>
              <View style={{ width: 90, height: 75, borderRadius: 10, backgroundColor: 'salmon', marginLeft: 6, marginTop: -50 }}></View>
            </View>
        </View>


        {/* ---1--- */}
          <View style={{alignItems: 'center' , }}>
          <View style={{ width: 320, height: 85, borderRadius: 10, backgroundColor: '#FFFFFF', marginLeft: 32, marginRight: 32, marginTop: 15,  }} >
            <View style={{ marginLeft: 115 }}>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000000', }}>Nama Tempat</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 80, marginTop: 4 }} />
              </View>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#B7B7B7', }}>Nm provinsi/kota</Text>
           </View>
              <View style={{ width: 90, height: 75, borderRadius: 10, backgroundColor: 'salmon', marginLeft: 6, marginTop: -50 }}></View>
            </View>
        </View>

      </ScrollView>
    
  )
}






