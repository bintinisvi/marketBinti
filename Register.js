import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
         <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          REGISTRASI
        </Text>
        <View style={styles.form}>
          <TextInput placeholder="User Name" style={styles.Input} />
          <TextInput placeholder="Email" style={styles.Input} />
          <TextInput placeholder="password" style={styles.Input} />
          <View style={styles.grButton}>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{fontSize: 15}}>Simpan!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:20,
    paddingRight:20,
  },

  judul: {
    fontSize: 25,
    color: 'hitam',
    fontWeight: 'bold',
    fontFamily: 'Cochin'
    
  },

  form: {
    marginTop: 40,
    padding : 20,
    alignSelf : 'stretch'
  },

  Input: {
    alignSelf:'strecth',
    padding:10,
    marginBottom:10,
    backgroundColor: 'white'
      },

  grButton: {
    flex : 1,
    alignContent : 'space-between'
    // flexBasis: 100,
  },
  btn: {
    alignSelf:'strecth',
    padding:10,
    marginBottom:20,
    backgroundColor: '#DAA520',
    alignItems: 'center',
  },
});