import React from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";

const Touchable = ({
  highlight,
  style,
  onPress,
  children,
  delayPressIn,
  bounceable,
  disabled,
}) => {
  return bounceable ? (
    <RNBounceable onPress={onPress} style={style}>
      {children}
    </RNBounceable>
  ) : highlight ? (
    <TouchableHighlight
      delayPressIn={delayPressIn}
      style={style}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableHighlight>
  ) : (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      delayPressIn={delayPressIn}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
