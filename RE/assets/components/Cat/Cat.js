import React from 'react'
import { Text } from 'react-native'

const FullName = (firstName, secondName, lastName ) => {
    return firstName+' '+secondName+' '+lastName
}

export default Cat = () => {
    return(
         <Text>Hello, I'm {FullName('Jacob','Culling','Lestrange')} </Text>
    );
}