import React from 'react';
import { View, Text, Dimensions, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
  Button,
  SocialIcon
} from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Connexion extends React.Component {
  
  static navigationOptions = {
    title: 'Login'
  };

  state = {
    modalVisible: false,
    login: null,
    password: null
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  handleLogin = (text) => {
    this.setState({ login: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder='Login'
          onChangeText={this.handleLogin}
          placeholderTextColor = 'black'
          autoCorrect={false}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='Password'
          onChangeText={this.handlePassword}
          placeholderTextColor = 'black'
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize='none'
        />
        <Button
          buttonStyle={styles.buttonStyle}
          title="Login"
          onPress={() => navigate('NavHome')}
        />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  inputStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#333',
    minHeight: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 20
  },

  buttonStyle: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    backgroundColor: '#1976D2'
  },

  container: {
    backgroundColor: '#fff',
  },
});