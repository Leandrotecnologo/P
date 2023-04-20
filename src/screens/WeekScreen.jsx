import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagem from '../../assets/Fundao.jpg';

const imageURI = imagem;

export default function WeekScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: imageURI }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Selecione:</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="1°Semana"
            onPress={() => navigation.navigate('WeekendyScreen')}
            color = "green"
          />
          <Button
            title="2°Semana"
            onPress={() => navigation.navigate('WeekendyScreen')}
          
            color = "#76BB39"          />
          <Button
            title="3°Semana"
            onPress={() => navigation.navigate('WeekendyScreen')}
            color = "#76BB39"
          />
          <Button
            title="4°Semana"
            onPress={() => navigation.navigate('WeekendyScreen')}
            color = "#76BB39"
          />
         
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  buttonContainer: {
     flexDirection: 'column',

     justifyContent: 'space-between',
    
     width: '50%',
    
    height: 300,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
