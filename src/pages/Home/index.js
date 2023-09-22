import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';

const list = [
  {
    id: 1,
    label: 'Boleto de Água',
    value: '390,00',
    date: '17/08/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '550,00',
    date: '02/11/2023',
    type: 1,
  },
  {
    id: 3,
    label: 'Salário',
    value: '1.250,00',
    date: '01/01/2023',
    type: 1,
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Vitória Rafaela' />
        <Balance saldo='3.444,00' gastos='2.000,00'/>
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item)=>String(item.id)}
            renderItem={({item})=> <Moviments data={item}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14
    },
    list:{
      marginEnd: 14,
      marginStart: 14,
    }
});
