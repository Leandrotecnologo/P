import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Button } from 'react-native';
import FundaoImage from '../../assets/Fundao.jpg';

const RadioSchedule = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [shokInfo, setShokInfo] = useState(false);
  const [shoxInfo, setShoxInfo] = useState(false);
  const [shozInfo, setShozInfo] = useState(false);
  const [shotInfo, setShotInfo] = useState(false);

  const toggleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  const toggleShokInfo = () => {
    setShokInfo(!shokInfo);
  };
  const toggleShoxInfo = () => {
    setShoxInfo(!shoxInfo);
  };
  const toggleShozInfo = () => {
    setShozInfo(!shozInfo);
  };
  const toggleShotInfo = () => {
    setShotInfo(!shotInfo);
  };

  const imageURI = FundaoImage;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    dayText: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#76BB39',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    programContainer: {
      marginLeft: 80,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    timeText: {
      marginLeft: 50,
      color: 'white',
      fontWeight: 'bold',
      marginRight: 16,
    },
    programText: {
      marginLeft: 50,
      color: 'white',
      fontSize: 16,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={imageURI} style={styles.backgroundImage}>
        <View>
          <View>
            <Text style={styles.dayText} onPress={toggleShowInfo}>
              Segunda
            </Text>
            {showInfo && (
              <View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>6:00 - 8:00 </Text>
                  <Text style={styles.programText}>Hora do Evangelho</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>8:00 - 10:00 </Text>
                  <Text style={styles.programText}>Café com Música</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>10:00 - 12:00 </Text>
                  <Text style={styles.programText}>Geração 90</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>12:00 - 14:00 </Text>
                  <Text style={styles.programText}>A Voz da Liberdade</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>14:00 - 16:00 </Text>
                  <Text style={styles.programText}>O Melhor do Indie</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>16:00 - 18:00 </Text>
                  <Text style={styles.programText}>Sessão Samba</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>18:00 - 20:00 </Text>
                  <Text style={styles.programText}>O show de comédia</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>20:00 - 22:00 </Text>
                  <Text style={styles.programText}>Noites de Jazz</Text>
                </View>

              </View>
            )}
            <Text style={styles.dayText} onPress={toggleShokInfo}>
              Terça
            </Text>
            {shokInfo && (
              <View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>6:00 - 8:00 </Text>
                  <Text style={styles.programText}>Hora do Evangelho</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>8:00 - 10:00 </Text>
                  <Text style={styles.programText}>Popmania</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>10:00 - 12:00 </Text>
                  <Text style={styles.programText}>Geração 80</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>12:00 - 14:00 </Text>
                  <Text style={styles.programText}>A Voz da Liberdade</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>14:00 - 16:00 </Text>
                  <Text style={styles.programText}>RockIn</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>16:00 - 18:00 </Text>
                  <Text style={styles.programText}> Reggae Island</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>18:00 - 20:00 </Text>
                  <Text style={styles.programText}>O show de comédia</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>20:00 - 22:00 </Text>
                  <Text style={styles.programText}>ElectCity</Text>
                </View>

              </View>
            )}
            <Text style={styles.dayText} onPress={toggleShoxInfo}>
              Quarta
            </Text>
            {shoxInfo && (
              <View>
                 <View style={styles.programContainer}>
                  <Text style={styles.timeText}>6:00 - 8:00 </Text>
                  <Text style={styles.programText}>Hora do Evangelho</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>8:00 - 10:00 </Text>
                  <Text style={styles.programText}>Café com Música</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>10:00 - 12:00 </Text>
                  <Text style={styles.programText}>Geração 70</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>12:00 - 14:00 </Text>
                  <Text style={styles.programText}>A Voz da Liberdade</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>14:00 - 16:00 </Text>
                  <Text style={styles.programText}>O Melhor do Indie</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>16:00 - 18:00 </Text>
                  <Text style={styles.programText}>Sessão Samba</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>18:00 - 20:00 </Text>
                  <Text style={styles.programText}>O show de comédia</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>20:00 - 22:00 </Text>
                  <Text style={styles.programText}>Noites de Jazz</Text>
                </View>

              </View>
            )}
            <Text style={styles.dayText} onPress={toggleShozInfo}>
              Quinta
            </Text>
            {shozInfo && (
              <View>
              <View style={styles.programContainer}>
                  <Text style={styles.timeText}>6:00 - 8:00 </Text>
                  <Text style={styles.programText}>Hora do Evangelho</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>8:00 - 10:00 </Text>
                  <Text style={styles.programText}>Popmania</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>10:00 - 12:00 </Text>
                  <Text style={styles.programText}>Geração 60</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>12:00 - 14:00 </Text>
                  <Text style={styles.programText}>A Voz da Liberdade</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>14:00 - 16:00 </Text>
                  <Text style={styles.programText}>RockIn</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>16:00 - 18:00 </Text>
                  <Text style={styles.programText}> Reggae Island</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>18:00 - 20:00 </Text>
                  <Text style={styles.programText}>O show de comédia</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>20:00 - 22:00 </Text>
                  <Text style={styles.programText}>ElectCity</Text>
                </View>

              </View>
            )}
            <Text style={styles.dayText} onPress={toggleShotInfo}>
              Sexta
            </Text>
            {shotInfo && (
              <View>
                  <View style={styles.programContainer}>
                  <Text style={styles.timeText}>6:00 - 8:00 </Text>
                  <Text style={styles.programText}>Hora do Evangelho</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>8:00 - 10:00 </Text>
                  <Text style={styles.programText}>Café com Música</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>10:00 - 12:00 </Text>
                  <Text style={styles.programText}>Geração 50</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>12:00 - 14:00 </Text>
                  <Text style={styles.programText}>A Voz da Liberdade</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>14:00 - 16:00 </Text>
                  <Text style={styles.programText}>O Melhor do Indie</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>16:00 - 18:00 </Text>
                  <Text style={styles.programText}>Sessão Samba</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>18:00 - 20:00 </Text>
                  <Text style={styles.programText}>O show de comédia</Text>
                </View>
                <View style={styles.programContainer}>
                  <Text style={styles.timeText}>20:00 - 22:00 </Text>
                  <Text style={styles.programText}>Noites de Jazz</Text>
                </View>

              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default RadioSchedule;
