import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { AsyncStorage, StatusBar, View, Platform, NetInfo, Text } from 'react-native';
import Router from './Router';
import configureStore from './Store';
import { Spinner } from './components/common';

//a dirty way to clear persisted old state
//Todo: if you've ran the old TodoRN version, uncomment this before get started.
//(async () => await AsyncStorage.clear())();

const Style = {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
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
            return <Spinner size="small" />;
        }

        return (
            <Provider store={this.state.store}>
                <View style={Style}>
                    <StatusBar backgroundColor={'black'} />
                    <Router />
                </View>
            </Provider>
        );
    }
}

export default App;