import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { albumsFetch, albumFilterChanged, albumSelect, albumFilterPressed } from '../../actions/AlbumActions';
import { photoListFetch } from '../../actions/PhotoActions';
import AlbumView from './AlbumView'

class AlbumList extends Component {

    componentWillMount() {
        if (this.props.rehydrated && this.props.filteredList.length == 0) {
            this.props.albumsFetch();
            this.props.photoListFetch();
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <AlbumView {...this.props} />
            </View>
        );
    }
}

const styles = {
    screen: {
        flex: 1,
    },
};

const mapStateToProps = ({ albums, photo, notPersisted }) => {
    const { filteredList, fetching, rehydrated, error, } = albums;
    const { filtering, albumFilterText } = notPersisted;
    const photosList = photo.list;
    const photosError = photo.error;
   
    return {
        filteredList,
        fetching,
        rehydrated,
        error,
        filtering,
        photosList,
        albumFilterText,
        photosError
    }
};

export default connect(mapStateToProps, {
    albumsFetch,
    albumFilterChanged,
    albumSelect,
    albumFilterPressed,
    photoListFetch
})(AlbumList);

