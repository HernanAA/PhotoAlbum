import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { AlbumViewItem } from './AlbumViewItem'
import { AlbumFilter } from './AlbumFilter'
import { Spinner, Header } from '../common';

class AlbumView extends Component {

    onAlbumPress(item) {
        // this.props.photoFetch(item._id);
        // Actions.photos();
    }

    renderItem({ item }) {
        const imageIndex = this.props.photosList.findIndex(
            (element, index, array) => element.albumId == item.id);

        const image = imageIndex >= 0 ? this.props.photosList[imageIndex].url : null;

        return (
            <TouchableOpacity onPress={this.onAlbumPress.bind(this, item)}>
                <AlbumViewItem item={item} image={image} />
            </TouchableOpacity>
        )
    }

    onFilterChanged(text) {
        this.props.albumFilterChanged({ text });
    }

    render() {
        const title = <Header headerText={"Your Photos"} />;

        if (this.props.fetching) {
            return (
                <View style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </View>
            )
        }

        if (this.props.error !== '') {
            return (
                <View style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.screen}>
                {title}
                <View style={styles.container}>
                    <AlbumFilter onFilterChanged={this.onFilterChanged.bind(this)} />
                    <View style={styles.listContainer}>
                        <FlatList
                            style={{ flex: 1, flexDirection: 'column' }}
                            numColumns={2}
                            data={this.props.filteredList}
                            keyExtractor={(item, index) => item.id}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                    <Text style={styles.quantityText}>
                        {this.props.filteredList ? this.props.filteredList.length + " images." : 'No images'}
                    </Text>
                </View>
            </View>
        )
    }
}

export default AlbumView;

const styles = {
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    listContainer: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        flex: 1,
        backgroundColor: Styles.colors.lightestGray,
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        fontSize: 10,
        color: Styles.colors.black,
        paddingHorizontal: 10,
    },
}