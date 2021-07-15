/**
 * Created by nghinv on Thu Jul 15 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

interface EdgeProps {
  edgeWidth?: number;
  edgeHeight?: number;
  edgeColor?: string;
  edgeBorderWidth?: number;
  type: 'Top_Left' | 'Top_Right' | 'Bottom_Left' | 'Bottom_Right'
}

function Edge(props: EdgeProps) {
  const {
    edgeWidth,
    edgeHeight,
    edgeColor,
    edgeBorderWidth,
    type,
  } = props;
  const [type1, type2] = type.split('_');

  const edgeStyle = {
    [type1.toLocaleLowerCase()]: 0,
    [type2.toLocaleLowerCase()]: 0,
    [`border${type1}Width`]: edgeBorderWidth,
    [`border${type2}Width`]: edgeBorderWidth,
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: edgeWidth,
          height: edgeHeight,
          borderColor: edgeColor,
        },
        edgeStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

export default React.memo(Edge);
