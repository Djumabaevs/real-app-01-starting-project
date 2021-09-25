import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   flex: 1
 }
});
