import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text, ImageBackground } from 'react-native'
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
        return null;
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
    onSearchChanged(){
        this.props.albumSearchChanged();
    }

    render() {
        const title = <Header headerText={"Albums"} 
            onFilterChanged={this.onFilterChanged.bind(this)}
            onSearchChanged={this.onSearchChanged.bind(this)}
            searching={this.props.searching}/>;

        if (this.props.fetching) {
            return (
                <ImageBackground source={require('./../../images/background.jpeg')} style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </ImageBackground>
            )
        }

        if (this.props.error !== '') {
            return (
                <ImageBackground source={require('./../../images/background.jpeg')} style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                    </View>
                </ImageBackground>
            )
        }

        return (
            <ImageBackground source={require('./../../images/background.jpeg')} style={styles.screen}>
                {title}
                <View style={styles.container}>
                    {/* <AlbumFilter onFilterChanged={this.onFilterChanged.bind(this)} /> */}
                    <View style={styles.listContainer}>
                        <FlatList
                            style={{ flex: 1, flexDirection: 'column' }}
                            numColumns={2}
                            data={this.props.filteredList}
                            keyExtractor={(item, index) => item.id}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                </View>
            </ImageBackground>
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
        backgroundColor: 'rgba(47,163,218,.2)'
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
}