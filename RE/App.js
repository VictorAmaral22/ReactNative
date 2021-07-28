import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Button, ImageBackground } from 'react-native';

import Cat from './assets/components/Cat/Cat'
import Card from './assets/components/Card/Card'

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={{ uri: 'https://evilhazard.com.br/wp-content/uploads/2017/10/Resident_Evil_Biohazard_HD_REMASTER_Background_Main_Hall.jpg'}} resizeMode="cover" style={styles.cover}></ImageBackground>
      
      {/* <Image source={{uri: 'https://www.einerd.com.br/wp-content/uploads/2020/06/CJ-GTA-San-Andreas-capa-890x465.jpg'}} style={styles.cejota}></Image>
      
      <TextInput style={styles.input} placeholder='Digite algo...' />
      <Cat/> */}

      <ScrollView style={styles.scroll}>
        <Card image={'https://cdn.mos.cms.futurecdn.net/nuhXezuwji5EEatJvoqqYZ.jpg'} name={'Chris Redfield'} />
        <Card image={'https://3.bp.blogspot.com/-CtmO6Z2Huec/XEfpeG6-lJI/AAAAAAAASBE/VZlRSNamGu4zZwguA5NaGSsZxEbVJB9eQCLcBGAs/s1600/resident-evil-2-gameplay-claire-redfield.jpg'} name={'Caire Redfield'} />
        <Card image={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a82aad2-55cc-4b43-82f4-9534a386ef3d/ddtg7cl-40b6c875-1d80-4d2c-91ac-1c14e99ed4b5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhODJhYWQyLTU1Y2MtNGI0My04MmY0LTk1MzRhMzg2ZWYzZFwvZGR0ZzdjbC00MGI2Yzg3NS0xZDgwLTRkMmMtOTFhYy0xYzE0ZTk5ZWQ0YjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TxctuRPzUMuNBE_9tqNR6jEl6OgKJoiSklpOFEMnkik'} name={'Jill Valentine'} />
        <Card image={'https://www.outerspace.com.br/wp-content/uploads/2018/06/residentevil2.jpg'} name={'Leon Kennedy'} />
        <Card image={'https://static.wikia.nocookie.net/residentevil/images/5/56/Adawong2019.png/revision/latest?cb=20190104024021&path-prefix=pt-br'} name={'Ada Wong'} />
        <Card image={'https://i.pinimg.com/originals/8b/92/b2/8b92b29c72f0a198754c2f544875b374.jpg'} name={'Steve Burnside'} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input: {
    width: '50%',
    height: 30,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 5
  },
  cejota: {
    width: 160,
    height: 160,
    borderRadius: 100
  },
  scroll: {
    marginTop: '10%',
    width: '100%',
    alignContent: 'center',
    marginLeft: '55%'
  },
  cover: {
    width: '100%',
    height: 1000,
    flex: 1,
    justifyContent: "center"
  }
});
