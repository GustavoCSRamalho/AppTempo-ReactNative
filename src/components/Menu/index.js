import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, userNavigation } from '@react-navigation/native';

export default function Menu(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.openDrawer()}>
            <Feather
                name="menu"
                size={36}
                color="#373737"
            />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 9,
        width:70,
        height: 70,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        left:15,
        top:40,
        borderTopRightRadius:30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3
        }
    }
})