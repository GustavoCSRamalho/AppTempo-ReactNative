import React, { useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import api,{ key } from '../../services/api'

import * as Location from 'expo-location';

export default function Home(){
    
    const [errorMsg,setErrorMsg] = useState(null) 
        
    const [loading,setLoading] = useState(true) 

    const [weather, setWeather] = useState([]) 

    const [icon, setIcon] = useState({ name: 'cloud', color: '#FFF'}) 

    const [background, setBackground] = useState(['#1ed6ff','#97c1ff']) 

    useEffect(() => {
        ( 
            async () => {
                let { status } = await Location.requestPermissionsAsync();
                console.log(status)
                if(status !== 'granted'){
                    setErrorMsg('Permissao negada para acessar localização!')
                    setLoading(false)
                    return;
                }

                let location = await Location.getCurrentPositionAsync({})
                console.log(location)

                const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)

                setWeather(response.data)

                if(response.data.results.currently === 'noite'){
                    setBackground(['#0c3741','#0f2f61'])
                }

                switch(response.data.results.condition_slug){
                    case 'clear_day':
                        setIcon({name:'partly-sunny', color: '#FFB300'})
                        break;
                    case 'clear_day':
                        setIcon({name:'rainy', color: '#FFF'})
                        break;
                    case 'clear_day':
                        setIcon({name:'rainy', color: '#FFF'})
                        break;
                }

                setLoading(false)
            }
        )();
    }, []);

    if(loading){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:17, fontStyle: 'italic'}}>Carregando dados...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header background={background} weather={weather} icon={icon}/>
            <Menu />
            <Conditions weather={weather} />
            <FlatList showsHorizontalScrollIndicator={false} style={styles.list} contentContainerStyle={{ paddingBottom: '5%'}} data={weather.results.forecast} horizontal={true} keyExtractor={item => item.date} renderItem={({item}) => <Forecast data={item}/>}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list:{
        marginTop: 10,
        marginLeft: 10
    }
})