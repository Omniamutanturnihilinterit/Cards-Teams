import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function CardMinimal() {
  const people = [
    {
      name: 'Sinta Nur Ella',
      emoji: '👧🏼',
    },
    {
      name: 'Rico Fahriza',
      emoji: '🧔🏻',
    },
    {
      name: 'Muhammad Farhan',
      emoji: '🧟‍♂️',
    },
    {
      name: 'Anggi Firdayanti',
      emoji: '💁🏻‍♀️',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>🍪 Team Cookie</Text>
        {people.map((person) => {
          return (
            <View style={styles.personContainer}>
              <Text style={styles.emoji}>{person.emoji}</Text>
              <Text style={styles.name}>{person.name}</Text>
            </View>
          );
        })}
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardContainer: {
    width: '80%',
    backgroundColor: '#FCE4EC',
    borderRadius: 16,
    padding: 16,
  },
  title: {
    color: '#C21F5B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    fontSize: 15,
    marginLeft: 10,
    color: '#C21F5B',
    fontWeight: '500',
  },
  emoji: {
    fontSize: 25,
  },
  button: {
    backgroundColor: '#C21F5B',
    width: '40%',
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});