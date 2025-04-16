import { View, Text, } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Button from './Button'

export default function Calculator() {
  return (
    <View style={{flex: 1,}}>

      <View style={{
          flex: 1, 
          backgroundColor: Colors.gray,
          paddingVertical: 20,
          paddingHorizontal: 40,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontSize: 70, fontWeight: 300}}>8768</Text>
      </View>

      <View style={{
          flex: 2, 
          backgroundColor: Colors.light,
          flexDirection: 'colomn',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 30,
          padding: 30,
        }}>
          <Button title='C' type='top' />
          <Button title='7' type='number' />
          <Button title='6' type='number' />
          <Button title='1' type='number' />
          <Button title='0' type='number' />
          <Button title='⌫' type='top' />
          <Button title='8' type='number' />
          <Button title='5' type='number' />
          <Button title='2' type='number' />
          <Button title='00' type='number' />
          <Button title='%' type='top' />
          <Button title='9' type='number' />
          <Button title='4' type='number' />
          <Button title='3' type='number' />
          <Button title='.' type='number' />
          <Button title='÷' type='right' />
          <Button title='x' type='right' />
          <Button title='-' type='right' />
          <Button title='+' type='right' />
          <Button title='=' type='right' />
      </View>

    </View>
  )
}