import React from 'react';
import {
    Scene,
    Router,
    Stack,
} from 'react-native-router-flux';
import Albums from './components/AlbumList';
//import PhotosList from './components/PhotoList';
//import Photo from './components/Photo';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root" hideNavBar>
                <Stack
                    back={false}
                    key="main"
                    duration={0}
                    hideNavBar
                    initial>

                    <Scene
                        key="albums"
                        component={Albums}
                        initial
                        hideNavBar
                    />

                    
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;