import React from "react";
import {View, StyleSheet, Text} from 'react-native';

const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
  };
  
  export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);
  
    if (!dataLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setDataLoaded(true)}
          onError={err => console.log(err)}
        />
      );
    }
  
    const configureNewGameHandler = () => {
      setGuessRounds(0);
      setUserNumber(null);
    };
  
    const startGameHandler = selectedNumber => {
      setUserNumber(selectedNumber);
    };
  
    const gameOverHandler = numOfRounds => {
      setGuessRounds(numOfRounds);
    };
  
    let content = <StartGameScreen onStartGame={startGameHandler} />;
  
    if (userNumber && guessRounds <= 0) {
      content = (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      );
    } else if (guessRounds > 0) {
      content = (
        <GameOverScreen
          roundsNumber={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      );
    }

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
})

export default Header;