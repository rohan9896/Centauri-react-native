import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

function getColor(length: number): string {
  if (length > 10) {
    return '#64748b';
  } else if (length > -1) {
    return 'orange';
  } else {
    return 'red';
  }
}

export function TweetBox() {
  const [count, setCount] = useState(280);

  function changeHandler(text: string) {
    setCount(280 - text.length);
  }

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.heading}>
        <Text style={styles.headingText}>Tweet Box</Text>
      </View>
      <TextInput
        onChangeText={changeHandler}
        multiline
        numberOfLines={4}
        style={[styles.textInput, {backgroundColor: getColor(count)}]}
      />
      <Text style={[styles.msgText, {color: getColor(count)}]}>
        {count} characters left
      </Text>
      <View style={styles.tweetBtn}>
        <Button
          color="#0284c7"
          title="Tweet"
          disabled={count < 0}
          accessibilityLabel="Click here to tweet!"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#115e59',
    margin: 20,
  },
  textInput: {
    minHeight: 200,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 30,
    fontSize: 20,
    margin: 20,
    padding: 10,
    color: 'blue',
  },
  msgText: {
    alignSelf: 'center',
    fontSize: 24,
    padding: 18,
  },
  tweetBtn: {
    backgroundColor: '#cffafe',
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 16,
    margin: 10,
  },
});
