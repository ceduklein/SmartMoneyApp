import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

const index = ({navigation}) => {
  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="CAMERA" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default index;
