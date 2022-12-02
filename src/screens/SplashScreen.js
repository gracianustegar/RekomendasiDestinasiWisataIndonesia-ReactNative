import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={};
}

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 3000);
    }

    render() {
        return (
            <View style={{flex: 1, }}>
                <ImageBackground source={require('../img/sp1.png')} style={{ flex: 1, }}>
            <View style={{  marginTop: 30, alignItems: 'center' }}>
             <Text style={{ fontSize: 38,fontWeight: '500', color: 'white', marginTop: 120, fontFamily: 'Poppins-Medium', }}>SELAMAT DATANG</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', marginTop: -2, fontFamily: 'Poppins-Reguler', marginLeft: 0}}>
                            di Rekomendasi Destinasi Tempat Wisata Indonesia</Text>
                </View>
            </ImageBackground>
            
            </View>
     )
    }
}
    
export default SplashScreen;
    //home


