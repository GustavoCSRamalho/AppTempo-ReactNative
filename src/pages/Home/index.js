import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import Conditions from '../../components/Conditions';
import Forcast from '../../components/Forcast';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function Home(){

    const mylist = [
        {
            "date": "02/12",
            "weekday": "Qua",
            "max": 27,
            "min": 19,
            "description": "Tempestades",
            "condition": "storm"
        },
        {
            "date": "03/12",
            "weekday": "Qui",
            "max": 28,
            "min": 20,
            "description": "Tempestades",
            "condition": "storm"
        },
        {
            "date": "04/12",
            "weekday": "Sex",
            "max": 28,
            "min": 19,
            "description": "Tempestades",
            "condition": "storm"
        },
        {
            "date": "05/12",
            "weekday": "Sáb",
            "max": 25,
            "min": 19,
            "description": "Tempestades",
            "condition": "storm"
        },
        {
            "date": "06/12",
            "weekday": "Dom",
            "max": 23,
            "min": 19,
            "description": "Tempestades",
            "condition": "storm"
        },
        {
            "date": "07/12",
            "weekday": "Seg",
            "max": 20,
            "min": 17,
            "description": "Trovoadas dispersas",
            "condition": "storm"
        },
        {
            "date": "08/12",
            "weekday": "Ter",
            "max": 20,
            "min": 17,
            "description": "Trovoadas dispersas",
            "condition": "storm"
        },
        {
            "date": "09/12",
            "weekday": "Qua",
            "max": 23,
            "min": 16,
            "description": "Tempestades isoladas",
            "condition": "storm"
        },
        {
            "date": "10/12",
            "weekday": "Qui",
            "max": 25,
            "min": 18,
            "description": "Tempestades",
            "condition": "storm"
        },
        {
            "date": "11/12",
            "weekday": "Sex",
            "max": 24,
            "min": 20,
            "description": "Tempestades",
            "condition": "storm"
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Menu />
            <Conditions/>
            <FlatList style={styles.list} contentContainerStyle={{ paddingBottom: '5%'}} data={mylist} horizontal={true} keyExtractor={item => item.date} renderItem={({item}) => <Forcast data={item}/>}/>
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