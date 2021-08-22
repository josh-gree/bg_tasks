import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

const TASK_ID = "TESTING"

TaskManager.defineTask(TASK_ID, async () => {
  const now = Date.now();
  console.log(`RUNNING ${TASK_ID} - Time ${now}`)

  return
})

async function registerTask() {
  const now = Date.now();
  console.log(`REGISTERING TASK ${TASK_ID} - Time ${now}`)

  return await BackgroundFetch.registerTaskAsync(TASK_ID, {
    minimumInterval: 60 * 10, 
    stopOnTerminate: false, 
    startOnBoot: true, 
  });
}

export default function App() {

  function setupBackgroundFetch () {
    registerTask()
  }

  useEffect( () => {
    setupBackgroundFetch()
  } )

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
