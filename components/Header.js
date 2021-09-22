import React from "react";
import {} from 'react-native';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%'
    },
    headerTitle: {
        
    }
})

export default Header;