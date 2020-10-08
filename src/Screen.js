import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login Screen!</Text>
        <View
          style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              padding: 15,
              width: '60%',
              backgroundColor: 'red',
              borderRadius: 5,
            }}>
            <Text style={{color: 'white'}}>Login as USER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat')}
            style={{
              padding: 15,
              width: '60%',
              backgroundColor: 'blue',
              borderRadius: 5,
              marginTop: 10,
            }}>
            <Text style={{color: 'white'}}>Login as VENDOR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export class UserHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>User Home Screen!</Text>
      </View>
    );
  }
}

export class UserProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>User Profile Screen!</Text>
      </View>
    );
  }
}

export class UserCartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>User Chart Screen!</Text>
      </View>
    );
  }
}

export class VendorChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Vendor Chat Screen!</Text>
      </View>
    );
  }
}

export class VendorListProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Vendor List Product Screen!</Text>
      </View>
    );
  }
}
