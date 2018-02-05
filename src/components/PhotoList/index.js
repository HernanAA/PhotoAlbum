import React, { Component } from 'react'
import { View, NetInfo } from 'react-native'
import { connect } from 'react-redux';
import PhotoListView from './PhotoListView'

class PhotoList extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <PhotoListView {...this.props} />
            </View>
        );
    }
}

const styles = {
    screen: {
        flex: 1,
    },
};

const mapStateToProps = ({ photo, albums }) => {
    const {selectedAlbum} = albums;
    const {albumPhotos} = photo;
    return { albumPhotos, selectedAlbum }
};

export default connect(mapStateToProps, {})(PhotoList);

