import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  return (
    <View style={styles.container}>
      {!props.filtering ?
        <View style={styles.leftContainer}>
          {props.backButton ?
            <TouchableOpacity
              style={styles.navBarLeftButton}
              activeOpacity={0.2}
              onPress={() => { Actions.pop() }}>
              <Icon name='arrow-back' size={25} color={Styles.colors.darkerGray} />
            </TouchableOpacity> :
            null
          }
          <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
        : null
      }
      {props.searchButton ? 
      <View style={styles.filterContainer}>
        <TextInput style={styles.inputText(props.filtering)}
          onChangeText={props.onFilterChanged}
          underlineColorAndroid={'transparent'}
          textAlign={'center'}
          value={props.albumFilterText}
          editable={props.filtering}>
        </TextInput>
        <TouchableOpacity
          style={styles.searchIconContainer}
          activeOpacity={0.1}
          onPress={() => { props.onFilterPressed() }}>
          <Icon name='search' size={25} color={Styles.colors.darkerGray} />
        </TouchableOpacity>
      </View>
      : null}
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(255,255,255,.3)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    flexDirection: 'row',
    elevation: 2
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 40,
    flex: 1,
  },
  navBarLeftButton: {
    marginRight: 20,
    paddingTop:5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '400',
    textShadowOffset: { width: 0, height: 1 },
    color: Styles.colors.darkerGray,
  },
  filterContainer:{
      flex: 1.3,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 45,
      flexDirection: 'row',
      borderRadius: 4,
  },
  inputText: (filtering) => {
    var style = {
      flex: 1,
      fontSize: 19,
      paddingBottom: 3,
      paddingLeft: 20,
      borderRadius: 10,
      height: 33,
      marginLeft: 20,
    }
    if (filtering) {
      style.backgroundColor = 'white'
    }
    return style;
  },
  searchIconContainer: {
    marginRight: 15,
  },
};

export { Header };
