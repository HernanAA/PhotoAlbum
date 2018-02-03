import React, { Component } from 'react'
import { View, NetInfo } from 'react-native'
import { connect } from 'react-redux';
import { albumsFetch, albumFilterChanged, albumSelect } from '../../actions/AlbumActions';
import AlbumView from './AlbumView'

class AlbumList extends Component {

    // componentWillMount() {
    //     if (this.props.rehydrated || this.props.filteredList.length > 0)
    //         this.props.albumsFetch();
    // }

    componentWillReceiveProps(next) {
        if (next.rehydrated || next.filteredList.length > 0){
            console.log('fetch')
            this.props.albumsFetch();
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

const mapStateToProps = ({ albums }) => {
    return { filteredList, fetching, rehydrated } = albums;
};

export default connect(mapStateToProps, {
    albumsFetch,
    albumFilterChanged,
    albumSelect
})(AlbumList);

