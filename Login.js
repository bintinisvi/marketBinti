import * as React from 'react';
import { Button, View, Text, StyleSheet,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';




export default class Home extends React.Component 
{
  constructor(props) {
    super(props);
    // console.log(this.props.navigation.navigate('Dashboard'));
    // this.props.navigation.navigate('Dashboard');
    console.log(this.props, 'login');
  }

  pindah = () => {
    this.props.navigation.navigate('Dashboard');
  };

  
  render() {
    return (
        <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          LOGIN
        </Text>
        <View style={styles.form}>
          <TextInput placeholder="Email/Telepon/Pengguna" style={styles.Input} />
          <TextInput placeholder="Password" style={styles.Input} />
          <View style={styles.grButton}>
            <TouchableOpacity style={styles.btn} onPress={this.pindah}>
              <Text style={{fontSize: 12,color:'#fff'}}>Login !</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.register}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{fontSize: 12,color:'hitam'}}>belum terdaftar?? Yuk Daftar dulu..</Text>
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
    paddingLeft:40,
    paddingRight:40,
  },

  judul: {
    fontSize: 30,
    color: 'putih',
    fontWeight: 'bold',
    fontFamily: 'Cochin'
    
  },

  form: {
    marginTop: 25,
    padding : 10,
    alignSelf : 'stretch'
  },

  Input: {
    alignSelf:'strecth',
    padding:10,
    marginBottom:20,
    backgroundColor: '#fff'
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
  register: {
    alignItems: 'center',
    padding:'40',
    color:'#fff'  }
});