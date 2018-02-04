import React, { Component } from 'react'
import { View, NetInfo } from 'react-native'
import { connect } from 'react-redux';
import { albumsFetch, albumFilterChanged, albumSelect, albumSearchChanged } from '../../actions/AlbumActions';
import { photoListFetch } from '../../actions/PhotoActions';
import AlbumView from './AlbumView'

class AlbumList extends Component {

    componentWillMount() {
        if (this.props.rehydrated && this.props.filteredList.length == 0) {
            alert('IMPORTANTE: render fetch')
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
        flex: 1
    },
};

const mapStateToProps = ({ albums, photo }) => {
    const { filteredList, fetching, rehydrated, error, searching } = albums;
    const photosList = photo.list;
    return { filteredList, fetching, rehydrated, error, searching, photosList }
};

export default connect(mapStateToProps, {
    albumsFetch,
    albumFilterChanged,
    albumSelect,
    albumSearchChanged,
    photoListFetch
})(AlbumList);

