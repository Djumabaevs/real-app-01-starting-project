import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

  const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );

  const GameScreen = props => {

    


  }



const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: 400,
      maxWidth: '90%'
    },
    listContainer: {
      flex: 1,
      width: '60%'
    },
    list: {
      flexGrow: 1,
      // alignItems: 'center',
      justifyContent: 'flex-end',
    },
    listItem: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 15,
      marginVertical: 10,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    }
  });
  
  export default GameScreen;