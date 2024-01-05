import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      text: 'HomeScreen',
      displayText: 'HomeScreen',
    };
  }
  render() {
    return(
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          backgroundColor = {'9c8210'}
          centerComponent={{
            text: 'HomeScreen',
            style: {color: '#fff', fontSize: 20},
        }}
        />
        <TextInput
          onChangeText={(text) => {
            this.setState({text: text});
          }}
          value={this.state.text}
        />
        <Text>{this.state.displayText}</Text>
      </View>
    </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
})