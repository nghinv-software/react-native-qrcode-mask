/**
 * Created by nghinv on Thu Jul 15 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import equals from 'react-fast-compare';
import Overlay from './Overlay';
import Edge from './Edge';
import AnimatedLine from './AnimatedLine';

interface QrCodeMaskProps {
  width?: number;
  height?: number;
  overlayOpacity?: number;
  showLineAnimated?: boolean;
  lineThick?: number;
  lineSize?: number | string;
  lineBorderRadius?: number;
  lineColor?: string;
  lineAnimationDuration?: number;
  lineDirection?: 'vertical' | 'horizontal';
  edgeWidth?: number;
  edgeHeight?: number;
  edgeColor?: string;
  edgeBorderWidth?: number;
  topTitle?: string;
  topTitleColor?: string;
  topTitleStyle?: TextStyle;
  viewTopTitleStyle?: StyleProp<ViewStyle>;
  renderTop?: () => React.ReactNode;
  bottomTitle?: string;
  bottomTitleColor?: string;
  bottomTitleStyle?: TextStyle;
  viewBottomTitleStyle?: StyleProp<ViewStyle>;
  renderBottom?: () => React.ReactNode;
  renderFrame?: () => React.ReactNode;
}

QrCodeMask.defaultProps = {
  width: 260,
  height: 200,
  edgeWidth: 20,
  edgeHeight: 20,
  edgeBorderWidth: 2,
  edgeColor: 'white',
  showLineAnimated: true,
  lineThick: 2,
  lineBorderRadius: 2,
  lineSize: '80%',
  lineColor: 'green',
  lineAnimationDuration: 1500,
  lineDirection: 'vertical',
  topTitleColor: 'white',
  bottomTitleColor: 'white',
};

function QrCodeMask(props: QrCodeMaskProps) {
  const {
    width,
    height,
    overlayOpacity,
    showLineAnimated,
    lineThick,
    lineSize,
    lineBorderRadius,
    lineColor,
    lineDirection,
    lineAnimationDuration,
    edgeColor,
    edgeWidth,
    edgeHeight,
    edgeBorderWidth,
    topTitle,
    topTitleColor,
    topTitleStyle,
    renderTop,
    viewTopTitleStyle,
    bottomTitle,
    bottomTitleColor,
    bottomTitleStyle,
    viewBottomTitleStyle,
    renderBottom,
    renderFrame,
  } = props;

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Overlay overlayOpacity={overlayOpacity}>
        {
          renderTop ? renderTop() : !!topTitle ? (
            <View style={[styles.viewTopTitle, { zIndex: 200 }, viewTopTitleStyle]}>
              <Text style={[styles.txtTitle, { color: topTitleColor }, topTitleStyle]}>{topTitle}</Text>
            </View>
          ) : null
        }
      </Overlay>
      <View style={styles.viewCenter}>
        <Overlay overlayOpacity={overlayOpacity} />
        <View style={[styles.mask, { width, height }]}>
          <Edge
            type='Top_Left'
            {...{ edgeColor, edgeWidth, edgeHeight, edgeBorderWidth }}
          />
          <Edge
            type='Top_Right'
            {...{ edgeColor, edgeWidth, edgeHeight, edgeBorderWidth }}
          />
          <Edge
            type='Bottom_Left'
            {...{ edgeColor, edgeWidth, edgeHeight, edgeBorderWidth }}
          />
          <Edge
            type='Bottom_Right'
            {...{ edgeColor, edgeWidth, edgeHeight, edgeBorderWidth }}
          />
          {
            renderFrame && renderFrame()
          }
          {
            showLineAnimated && (
              <AnimatedLine
                {...{
                  width,
                  height,
                  edgeBorderWidth: edgeBorderWidth! + 3,
                  lineThick,
                  lineSize,
                  lineBorderRadius,
                  lineColor,
                  lineDirection,
                  lineAnimationDuration,
                }}
              />
            )
          }
        </View>
        <Overlay overlayOpacity={overlayOpacity} />
      </View>
      <Overlay overlayOpacity={overlayOpacity}>
        {
          renderBottom ? renderBottom() : !!bottomTitle ? (
            <View style={[styles.viewBottomTitle, viewBottomTitleStyle]}>
              <Text style={[styles.txtTitle, { color: bottomTitleColor }, bottomTitleStyle]}>{bottomTitle}</Text>
            </View>
          ) : null
        }
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  viewCenter: {
    flexDirection: 'row',
  },
  mask: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTopTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  viewBottomTitle: {
    flex: 1,
    padding: 16,
  },
  txtTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default React.memo(QrCodeMask, equals);
