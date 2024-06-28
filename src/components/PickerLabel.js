import React, { useState } from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const PickerLabel = ({ label, onLayout, labelStyle, transformY = 0 }) => {
  const [textLayout, setTextLayout] = useState({ width: 0, height: 0 });

  const handleTextLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setTextLayout({ width, height });
  };

  const bgStyle = {
    ...styles.background,
    width: textLayout.width,
    height: textLayout.height,
  };

  // Radius must be in range (0 < r <= 25) RSIllegalArgumentException: android.renderscript.ScriptIntrinsicBlur
  const blurRadius = (x) => Math.max(0, Math.min(x, 25))
  const blurIntensities = {
    'android': blurRadius(textLayout.width),
    'ios': blurRadius(textLayout.width / 2),
    'web': blurRadius(textLayout.width / 2)
  }

  return (
      <View style={[styles.container, { transform: [{ translateY: transformY * -1 }] }]} onLayout={onLayout}>
        <BlurView
            intensity={blurIntensities[Platform.OS]}
            tint='light'
            style={[bgStyle, styles.blurView]}
            experimentalBlurMethod='dimezisBlurView'
        />
        <Text onLayout={handleTextLayout} style={[styles.background, styles.label, labelStyle]}>
          {label}
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 99999,
  },
  background: {
    marginLeft: responsiveWidth(1.5),
    marginRight: responsiveWidth(0.5),
    paddingLeft: responsiveWidth(0.5),
    paddingRight: responsiveWidth(1),
  },
  blurView: {
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  label: {
    color: '#000',
    fontSize: responsiveFontSize(1.75),
    textAlign: 'center',
  },
});

export default PickerLabel;
