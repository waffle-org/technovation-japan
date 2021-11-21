import * as React from 'react';
import { StyleSheet } from 'react-native';

import FarmerList from '../components/FarmerList';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function FarmerListScreen({ navigation }:
  RootTabScreenProps<'FarmerList'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FarmerList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
