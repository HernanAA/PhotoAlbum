import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, StatusBar, Platform, ImageBackground } from 'react-native';
import Router from './Router';
import configureStore from './Store';
import { Spinner } from './components/common';

//a dirty way to clear persisted old state
//Todo: if you've ran the old TodoRN version, uncomment this before get started.
//(async () => await AsyncStorage.clear())();

const Style = {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    width: '100%',
    height: '100%'
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({ isLoading: false }))
        };
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ImageBackground source={require('./images/background.jpg')} style={Style}>
                    <Spinner size="small" />
                </ImageBackground>
            )
        }

        return (
            <Provider store={this.state.store}>
                <ImageBackground source={require('./images/background.jpg')} style={Style}>
                    <StatusBar hidden />
                    <Router />
                </ImageBackground>
            </Provider>
        );
    }
}

export default App;