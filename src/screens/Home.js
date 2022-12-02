import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PixelRatio } from 'react-native';
import Iicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from 'react-native-shadow-cards';



export default function Home({navigation}) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1',}}>
        <View style={{ marginLeft: 17, marginTop: 45 }}>
          <View style={{ flexDirection: 'row'}}>
            <Text style={{ fontSize: 40, marginLeft: 0, lineHeight: 45, fontFamily: 'Poppins-SemiBold', color: '#000000' }} > Hai, </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
              <Iicon name="information-circle-outline" color="black" size={25}
              style={{ marginLeft: 230, marginTop: 4 }} />
            </TouchableOpacity>
            
            
            
          </View>
        
        <Text style={{ fontSize: 16.4, fontWeight: '400', color: '#767676', lineHeight: 20, marginLeft:8}} > Bagaimana kabarmu hari ini ?</Text>
        </View>
            


        <View style={{ marginTop: 70 }}>
           <Text style={{ fontSize: 17, color: '#000000', marginLeft: 25, fontFamily: 'Poppins-SemiBold', }}>Rekomendasi akhir tahun</Text>
        </View>
        {/*  */}
         <View style={{flexDirection: 'row', marginTop: -25}}>
        <ScrollView
          horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {/*  bagian 1*/}
            <View style={{ marginTop: 20, marginLeft: 0}}>
          <Card style={{
                backgroundColor: '#ffffff', width: 335, height: 200, borderRadius: 15, margin: 20, elevation: 3, zIndex: 10
              }}>
                
                  <TouchableOpacity onPress={() => navigation.navigate('Pantaipandawa')}>
                    <View>
                    <Image source={require('../img/pdw2.png')} style={{ width: 335, height: 200, borderRadius: 15 }} />
                    <View style={{ marginTop: -60, }}>
                <View style={{ flexDirection: 'row', marginLeft: 20}}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Pantai Pandawa</Text>
                <Icon name="chevron-right" size={18} color="#ffffff" style={{ marginLeft: 119, marginTop: 7 }} />
                </View>
               <Text style={{ color: '#F2F2F2', fontSize: 14, marginTop: -10, fontWeight: '400', fontFamily: 'Poppins-Medium', marginLeft: 20}}>Bali</Text>
                      </View>
              </View>
                </TouchableOpacity>
            
                
            </Card>
            </View>
           
            
            {/* bagian 2*/}
            <View style={{ marginTop: 20, marginLeft: -17}}>
          <Card style={{
                backgroundColor: '#ffffff',
                width: 335,
                height: 200,
                borderRadius: 15,
                margin: 20,
                elevation: 3,
                marginLeft: 15
              }}>
                <TouchableOpacity onPress={() => navigation.navigate('Pantaisumba')}>
                  <View >
                    <Image source={require('../img/pantaiwalakirisumba2.png')} style={{ width: 335, height: 200, borderRadius: 15 }} />
                    <View style={{ marginTop: -60, }}>
                <View style={{ flexDirection: 'row', marginLeft: 20}}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Pantai Walakiri Sumba</Text>
                <Icon name="chevron-right" size={18} color="#ffffff" style={{ marginLeft: 55, marginTop: 7 }} />
                </View>
               <Text style={{ color: '#F2F2F2', fontSize: 14, marginTop: -10, fontWeight: '400', fontFamily: 'Poppins-Medium', marginLeft: 20}}>Nusa Tenggara Timur</Text>
               </View>
              </View>
                </TouchableOpacity>
            </Card>
            </View>
           
           
           
           
            
            {/* bagian 3*/}
            <View style={{ marginTop: 20, marginLeft: -17}}>
          <Card style={{
                backgroundColor: '#ffffff',
                width: 335,
                height: 200,
                borderRadius: 15,
                margin: 20,
                elevation: 3,
                marginLeft: 15
              }}>
                <TouchableOpacity onPress={() => navigation.navigate('Tanahlot')}>
                  <View >
                    <Image source={require('../img/tl.png')} style={{ width: 335, height: 200, borderRadius: 15 }} />
                    <View style={{ marginTop: -60, }}>
                <View style={{ flexDirection: 'row', marginLeft: 20}}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Pura Tanah Lot</Text>
                <Icon name="chevron-right" size={18} color="#ffffff" style={{ marginLeft: 137, marginTop: 7 }} />
                </View>
               <Text style={{ color: '#F2F2F2', fontSize: 14, marginTop: -10, fontWeight: '400', fontFamily: 'Poppins-Medium', marginLeft: 20}}>Bali</Text>
               </View>
              </View>
                </TouchableOpacity>
            </Card>
            </View>
           
           
           
   
    </ScrollView>  
            </View>
        

        {/*  */}
        
        <View style={{ flexDirection: 'row', marginTop: 30}}>
          <Text style={{ fontSize: 20, color: '#000000', marginLeft: 25, fontFamily: 'Poppins-SemiBold', }}>Rekomendasi</Text>
        <View style={{ backgroundColor: '#E7E7E7', width: 100, height: 25, borderRadius: 20, alignContent: 'center', alignItems: 'center', marginTop: 4, marginLeft: 111 ,}}>
          <TouchableOpacity onPress={() => navigation.navigate('Recommend')}>
              <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: 'black', marginTop: 4}}>lihat semua</Text>
            
          </TouchableOpacity>
          </View>
        
        </View>
        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11, color: '#000000', marginLeft: 25 }}>Rekomendasi destinasi{'\n'}wisata Indonesia</Text>
        


         <View style={{flexDirection: 'row', marginTop: -5}}>
        <ScrollView
          horizontal={true}
              showsHorizontalScrollIndicator={false}>
            {/* namatempat1 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
              elevation: 2,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Rajaampat')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/wst1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 11, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Raja Ampat</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 45, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Papua barat</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>

        
            {/* namatempat 2 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
              elevation: 2,
              marginLeft: -10,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Pulaukomodo')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/pk1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 11, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Pulau Komodo</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 25, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Nusa Tenggara Timur</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>

        
            {/* namatempat 3 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
                elevation: 2,
              marginLeft: -10,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Nusapenida')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/np1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 11, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Nusa Penida</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 40, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Bali</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>


            {/* namatempat 4 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
                elevation: 2,
              marginLeft: -10,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Gunungrinjani')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/gr1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 11, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Gunung Rinjani</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 21, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Nusa Tenggara Barat</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>



          </ScrollView>
        </View>
          
        



        <View style={{ flexDirection: 'row', marginTop: 40}}>
          <Text style={{ fontSize: 20, color: '#000000', marginLeft: 25, fontFamily: 'Poppins-SemiBold', }}>Spesial</Text>
          <View style={{ backgroundColor: '#E7E7E7', width: 100, height: 25, borderRadius: 20, alignContent: 'center', alignItems: 'center', marginTop: 4, marginLeft: 177 ,}}>
          <TouchableOpacity onPress={() => navigation.navigate('Spesial')}>
              <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: 'black', marginTop: 4}}>lihat semua</Text>
          </TouchableOpacity>
           </View>
        </View>
        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11, color: '#000000', marginLeft: 25 }}>Spesial Rekomendasi destinasi{'\n'}wisata Indonesia untuk kamu</Text>


       
        <View style={{flexDirection: 'row', marginTop: -5}}>
        <ScrollView
          horizontal={true}
            showsHorizontalScrollIndicator={false}>
               {/* namatempat1 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
              elevation: 2,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Diengkawah1')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/dk1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 11, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Dieng Kawah</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 35, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Tengah</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>
            

            {/* namatempat 2 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
              elevation: 2,
              marginLeft: -10,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Telagasarangan1')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/sr1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 11, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Telaga Sarangan</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 8, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -1, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Timur</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>

        

            

            {/* namatempat 3 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
              elevation: 2,
              marginLeft: -10,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Tamanbunganusantara1')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/tbn1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 4, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Taman Bunga Nusantara</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 25, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -4, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Barat</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>

        

            
            {/* namatempat 4 */}
          <View >
            <Card style={{
              backgroundColor: '#ffffff',
              width: 165,
              height: 210,
              borderRadius: 10,
              margin: 20,
              elevation: 2,
              marginLeft: -10,
              }} >
                <TouchableOpacity onPress={() => navigation.navigate('Kawahputih1')}>
                  <View style={{marginLeft: 8, marginRight: 8, marginTop: 7}}>
                  <Image source={require('../img/kp1.png')} style={{width: 149, height: 135,  borderRadius: 10}} />
              </View>
               <View style={{ marginTop: 4, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row'}}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '600',fontFamily: 'Poppins-SemiBold', }}>Kawah Putih</Text>
                <Icon name="chevron-right" size={12} color="#000000" style={{ marginLeft: 42, marginTop: 4 }} />
                </View>
               <Text style={{ color: '#AAAAAA', fontSize: 10, marginTop: -4, fontWeight: '400', fontFamily: 'Poppins-Light',}}>Jawa Barat</Text>
               </View>
                </TouchableOpacity>
                
              </Card>
            </View>

        

            
          </ScrollView>
        </View>


        <View style={{ marginBottom: 20}}></View>
      </ScrollView>
    
  )
}






