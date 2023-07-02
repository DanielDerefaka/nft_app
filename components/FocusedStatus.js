import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused, IsFocused } from '@react-navigation/core'


const FocusedStatus = (props) => {
    const IsFocused = useIsFocused();
  return IsFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatus