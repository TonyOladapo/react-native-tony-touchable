# react-native-tony-touchable
A custom touchable with some useful features.

## Installation

```sh
yarn add react-native-tony-touchable
```

## Usage
```
Import { Text } from 'react-native'
Import Touchable from 'react-native-tony-touchable'

<Touchable bounceable onPress={() => {
    //handle click here
    console.log("Clicked")
  }}>
  <Text>Click Me!<Text>
</Touchable>
```

## Props
| Prop | Default | Description |
| ------ | ------ | ------- |
| onPress | undefined | Function invoked when touchable in pressed |
| highlight | boolean | ... |
| style | style | ... |
| children | React Component | ... |
| delayPressIn | number | ... |
| bounceable | boolean | ... |
| disabled | boolean | ... |
