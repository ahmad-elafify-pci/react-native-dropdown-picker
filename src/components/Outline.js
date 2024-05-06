import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export const Outline = ({
  label,
  activeColor,
  backgroundColor,
  hasActiveOutline,
  outlineColor,
  roundness,
  style,
}) => {
  return (
    <View
      testID='dropdown-outline'
      pointerEvents='none'
      style={[
        styles.outline,
        !label && styles.noLabelOutline,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor,
          borderRadius: roundness,
          borderWidth: hasActiveOutline ? 2 : 1,
          borderColor: hasActiveOutline ? activeColor : outlineColor,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  noLabelOutline: {
    top: 0,
  },
  outline: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
