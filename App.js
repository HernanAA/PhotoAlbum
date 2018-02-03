import React, { Component } from 'react';
import { StatusBar, View, Platform, Text } from 'react-native';


const Style = {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
}

class App extends Component {
    render() {
        return (
            <View style={Style}>
                <Text> Your photos </Text>
                <StatusBar backgroundColor={'black'} />
            </View>
        );
    }
}

export default App;

