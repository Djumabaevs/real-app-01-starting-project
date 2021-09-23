import React from "react";
import {
View,
Text,
StyleSheet,
Button,
TouchableWithoutFeedback,
Keyboard,
Alert
} from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game Screen!!!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      marginVertical: 10,
      fontFamily: 'open-sans-bold'
    },
    inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: 100
    },
    input: {
      width: 50,
      textAlign: 'center'
    },
    summaryContainer: {
      marginTop: 20,
      alignItems: 'center'
    }
  });

export default StartGameScreen;