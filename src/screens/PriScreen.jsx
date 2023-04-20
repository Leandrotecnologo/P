import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PriScreen = () => {
  const [numUsers, setNumUsers] = useState(Math.floor(Math.random() * 1000) + 10000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumUsers(prevNumUsers => prevNumUsers + Math.random() * 10);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários online</Text>
      <Text style={styles.numUsers}>{numUsers.toFixed()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numUsers: {
    color: '#0f0',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default PriScreen;
