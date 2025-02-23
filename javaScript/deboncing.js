/**
 * The debounced function will ignore all calls to it until the calls have stopped for a specified time period.
 * Only then will it call the original function.
 *
 * Debouncing forces a function to wait a certain amount of time before running again.
 * In other words, it limits the rate at which a function gets invoked.
 */

import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function debounce(fun, timeout = 500) {
    let timer;
    return (args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun(args);
      }, timeout);
    };
  }

  const countIncrenmentFunction = () => {
    setCount(count + 1);
  };

  const processChange = debounce((value) => countIncrenmentFunction());

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>
      <TextInput
        placeholder="type here"
        style={{ borderWidth: 1, padding: 10 }}
        onChangeText={(value) => {
          // setText(value);
          // setCount(count+1)
          processChange(value);
        }}
      />
      <Text>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
