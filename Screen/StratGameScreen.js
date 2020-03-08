import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../Components/Card';
import Colors from '../Constants/Colors';
import Input from '../Components/Input';

const StartGameScreen = () => {
  const [enterValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enterValue);
    if (chooseNumber == NaN || chooseNumber <= 0 || chooseNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    setEnteredValue('');
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Selected Number : {selectedNumber}</Text>;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.Screen}>
          <Text style={styles.title}>Start a New Game!</Text>
          <Card style={styles.InputContainer}>
            <Text>Select a number</Text>
            <Input
              style={styles.Input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enterValue}
            />
            <View style={styles.ButtonContainer}>
              <View style={styles.Buttons}>
                <Button
                  onPress={resetInputHandler}
                  color={Colors.accent}
                  title="Reset"
                />
              </View>
              <View style={styles.Buttons}>
                <Button
                  onPress={confirmInputHandler}
                  color={Colors.primaryColor}
                  title="Confirm"
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  InputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  Buttons: {width: 90},
  Input: {
    width: 50,
    height: 40,
    textAlign: 'center',
  },
});

export default StartGameScreen;
