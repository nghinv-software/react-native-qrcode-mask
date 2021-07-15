/**
 * Created by nghinv on Thu Jul 15 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React, { useMemo, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

interface OverlayProps {
  overlayOpacity?: number;
  children?: React.ReactNode;
}

function Overlay(props: OverlayProps) {
  const {
    overlayOpacity = 0.6,
    children,
  } = props;
  const opacity = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: overlayOpacity,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [opacity, overlayOpacity]);

  if (children) {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.content,
            {
              opacity,
            },
          ]}
        />
        {children}
      </View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.content2,
        {
          opacity,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  content2: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default React.memo(Overlay);
