import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// You can import from local files
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: '',
      chunks: [],
    };

 <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ texto: text });
            }}
            value={this.state.text}
          />
 <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
            }}>
            <Text style={styles.buttonText}>IR</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item) => {
              return (
                <TouchableOpacity style={styles.chunkButton}>
                  <Text style={styles.displayText}>{item}</Text>
                </TouchableOpacity>



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
