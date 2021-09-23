import React from "react";
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
    }
});

export default StartGameScreen;