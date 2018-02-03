import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import PhotoView from './PhotoView'

class Photo extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <PhotoView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1,
    },
};

const mapStateToProps = ({ photo }) => {
    const photo = photo.selectedPhoto;
    const { photoFetching, error } =  photo

    return { photo, photoFetching, error}
};

export default connect(mapStateToProps, )(Photo);

