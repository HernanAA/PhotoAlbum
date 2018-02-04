import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  //alert(props.filtering);
  return (
    <View style={styles.container}>
      {!props.filtering ?
        <View style={styles.leftContainer}>
          {props.backButton ?
            <TouchableOpacity
              style={styles.navBarLeftButton}
              activeOpacity={0.2}
              onPress={() => { Actions.pop() }}>
              <Icon name='arrow-back' size={20} color={Styles.colors.white} />
            </TouchableOpacity> :
            null
          }
          <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
        : null
      }
      <View style={styles.filterContainer(props.filtering)}>
        <TextInput style={styles.inputText(props.filtering)}
          onChangeText={props.onFilterChanged}
          underlineColorAndroid={'transparent'}
          textAlign={'center'}
          value={props.albumFilterText}>
        </TextInput>
        <TouchableOpacity
          style={styles.searchIconContainer}
          activeOpacity={0.1}
          onPress={() => { props.onFilterPressed() }}>
          <Icon name='search' size={25} color={Styles.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(47,163,218,.4)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    flexDirection: 'row',
    elevation: 1
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    flex: 1,
  },
  navBarLeftButton: {
    marginRight: 20,
  },
  headerText: {
    fontSize: 27,
    fontWeight: '400',
    textShadowOffset: { width: 0, height: 1 },
    color: Styles.colors.white,
  },
  filterContainer: (filtering) => {
    var style = {
      flex: 1.3,
      backgroundColor: 'rgba(47,163,218,.1)',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 45,
      //paddingLeft: 20,
      flexDirection: 'row',
      borderRadius: 4,
    }
    if (filtering) {
      style.backgroundColor = 'rgba(47,163,218,.4)'
    }
    return style;
  },
  inputText: (filtering) => {
    var style = {
      flex: 1,
      fontSize: 19,
      paddingBottom: 3,
      paddingLeft: 20,
      //color: Styles.colors.white,
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
