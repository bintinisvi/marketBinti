import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Button,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation';



export default class App extends React.Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
         <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
            <View style={{marginHorizontal: 17,flexDirection: 'row'}}>
                <View style={{position: 'relative', flexDirection: 'row'}}>
                      <Image source={require('./Icon/search.png')} 
                     style={{position: 'absolute',left: 12}} style={styles.img}/>
                    <TextInput placeholder="What do you want it?" style={{borderWidth: 1,borderColor: '#e8e8e8',
                     borderRadius: 25, height: 40, fontSize: 13,paddingLeft: 45, paddingRight: 20,
                     backgroundColor: 'white', marginRight: 18,}}/>
                    
                </View>
               <View style={{width: 35, backgroundColor: 'white',alignItems: "center",justifyContent: 'center'}}>
                    <Image source={require('./Icon/keranjang.png')} style={styles.img}/>
                </View>
            </View>

         </View>
          
         <View >
            <Image source={require('./Icon/gambar2.jpg')} style={styles.gambar} />
         </View>

         <View style={{height: 54, backgroundColor: 'white',flexDirection: 'row'}}>
         <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
              <TouchableOpacity>
              <Image source={require("./Icon/home-active.png")} style={styles.img}/>
              <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Home</Text>
              </TouchableOpacity>    
         </View>
         <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
              <TouchableOpacity>
              <Image source={require('./Icon/help-active.png')} style={styles.img}/>
              <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Help</Text>
              </TouchableOpacity>     
         </View>
         <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
              <TouchableOpacity>
              <Image source={require('./Icon/inbox-active.png')}style={styles.img}/>
              <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Inbox</Text>
              </TouchableOpacity>
         </View>
         <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
              <TouchableOpacity>
              <Image source={require('./Icon/order-active.png')} style={styles.img}/>
              <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Pay</Text>
              </TouchableOpacity>   
         </View>
         <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                <TouchableOpacity>
                <Image source={require('./Icon/account-active.png')} style={styles.img}/>
                <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Akun</Text>
                </TouchableOpacity>
         </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
   width:26, 
   height: 26 
  },
  gambar: {
    flex: 1,
    width:350,
    height:150,
    
  }
  
});