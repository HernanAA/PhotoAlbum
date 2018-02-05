import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text, ImageBackground, Animated } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { AlbumViewItem } from './AlbumViewItem'
import { Spinner, Header } from '../common';

class AlbumView extends Component {

    constructor(props) {
        super(props)
        this.state = ({ animateItem: new Animated.Value(0) })
    }

    onAlbumPress(item) {
        this.props.albumSelect(item);
        Actions.photoList();
    }

    componentWillMount() {
        Animated.timing(this.state.animateItem, {
            toValue: 1,
            duration: 900
        }).start()
    }

    renderItem({ item }) {
        const imageIndex = this.props.photosList.findIndex(
            (element, index, array) => element.albumId == item.id);

        const image = imageIndex >= 0 ? this.props.photosList[imageIndex].url : null;

        return (
            <TouchableOpacity
                onPress={this.onAlbumPress.bind(this, item)}>

                <Animated.View style={{
                    transform: [
                        {
                            translateY: this.state.animateItem.interpolate({
                                inputRange: [0, 1],
                                outputRange: [700, 1]
                            })
                        } 
                    ]
                }}>
                    <AlbumViewItem item={item} image={image} />
                </Animated.View>
            </TouchableOpacity>
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

        if (this.props.error != '' || this.props.photosError != '') {
            return (
                <ImageBackground source={require('./../../images/background.jpg')} style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                        <Text> {this.props.photosError} </Text>
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