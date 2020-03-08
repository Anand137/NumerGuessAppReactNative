import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Components/Header';
import StratGameScreen from './Screen/StratGameScreen';

const App = () => {
  return (
    <>
      <View style={styles.Screen}>
        <Header title="Guess A Number" />
        <StratGameScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
});

export default App;
