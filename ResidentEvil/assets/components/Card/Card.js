import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

export default Card = (props) => {
    return(
        <View style={styles.mainView}>
            <Image style={styles.image} source={{ uri: props.image}}></Image>
            <Text style={styles.text} >{props.name }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        width: '45%',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    text: {
        fontSize: 18
    }
})