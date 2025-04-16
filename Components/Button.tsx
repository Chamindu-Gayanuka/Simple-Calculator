import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors';

export default function Button({title, type, onPress}: {
    title: string; 
    type: 'top' | 'right' | 'number';
    onPress?: Function
}) {
  return (
    <TouchableOpacity style={{
        height: 70,
        width: 70,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: type === 'top' ? Colors.btnDark : type === 'right' ? Colors.btnRight : Colors.btnLight,
    }} onPress={onPress}>
        <Text style={{fontSize: 34, color: type == 'number' ? Colors.black : Colors.white}}>{title}</Text>
    </TouchableOpacity>
  );
};