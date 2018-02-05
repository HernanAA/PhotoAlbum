import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, FlatList, Text, ImageBackground, Animated } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { AlbumViewItem } from './AlbumViewItem'
import { Spinner, Header } from '../common';

class AlbumView extends Component {

    constructor(props) {
        super(props)
        this.state = ({ animatePress: new Animated.Value(1) })
    }

    onAlbumPress(item) {
        this.props.albumSelect(item);
        Actions.photoList();
    }

    onAlbumPressIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200
        }).start()
    }
    onAlbumPressOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200
        }).start()
    }



    renderItem({ item }) {
        const imageIndex = this.props.photosList.findIndex(
            (element, index, array) => element.albumId == item.id);

        const image = imageIndex >= 0 ? this.props.photosList[imageIndex].url : null;

        return (
            <TouchableWithoutFeedback
                onPress={this.onAlbumPress.bind(this, item)}
                onPressIn={this.onAlbumPressIn.bind(this)}
                onPressOut={this.onAlbumPressOut.bind(this)}>
                <Animated.View style={{
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                    <AlbumViewItem item={item} image={image} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    onFilterChanged(text) {
        this.props.albumFilterChanged({ text });
    }
    onFilterPressed() {
        this.props.albumFilterPressed();
    }

    render() {
        const title = <Header headerText={"Your Albums"}
            onFilterChanged={this.onFilterChanged.bind(this)}
            onFilterPressed={this.onFilterPressed.bind(this)}
            filtering={this.props.filtering}
            backButton={false}
            searchButton={true}
            albumFilterText={this.props.albumFilterText} />;

        if (this.props.fetching) {
            return (
                <ImageBackground source={require('./../../images/background.jpg')} style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </ImageBackground>
            )
        }

        if (this.props.error !== '') {
            return (
                <ImageBackground source={require('./../../images/background.jpg')} style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                    </View>
                </ImageBackground>
            )
        }

        return (
            <ImageBackground source={require('./../../images/background.jpg')} style={styles.screen}>
                {title}
                <View style={styles.container}>
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