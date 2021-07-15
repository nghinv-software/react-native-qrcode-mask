/**
 * Created by nghinv on Thu Jul 15 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React, { useEffect, useMemo } from 'react';
import { Animated } from 'react-native';
import equals from 'react-fast-compare';

interface AnimatedLineProps {
  width?: number;
  height?: number;
  edgeBorderWidth?: number;
  lineThick?: number;
  lineSize?: number | string;
  lineBorderRadius?: number;
  lineColor?: string;
  lineAnimationDuration?: number;
  lineDirection?: 'vertical' | 'horizontal';
}

function AnimatedLine(props: AnimatedLineProps) {
  const {
    width,
    height,
    edgeBorderWidth,
    lineThick,
    lineSize,
    lineBorderRadius,
    lineColor,
    lineDirection,
    lineAnimationDuration,
  } = props;
  const animatedValue = useMemo(() => new Animated.Value(edgeBorderWidth!), [edgeBorderWidth]);

  useEffect(() => {
    const toValue = (lineDirection === 'vertical' ? height! : width!) - edgeBorderWidth! - lineThick!;

    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue,
          duration: lineAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: edgeBorderWidth!,
          duration: lineAnimationDuration,
          useNativeDriver: true,
        }),
      ]),
    );

    anim.start();

    return () => {
      anim.stop();
    };
  }, [animatedValue, width, height, lineDirection, lineAnimationDuration, edgeBorderWidth]);

  return (
    <Animated.View
      // @ts-ignore
      style={{
        position: 'absolute',
        [lineDirection === 'vertical' ? 'top' : 'left']: 0,
        width: lineDirection === 'vertical' ? lineSize : lineThick,
        height: lineDirection === 'vertical' ? lineThick : lineSize,
        borderRadius: lineBorderRadius,
        backgroundColor: lineColor,
        transform: [
          {
            [lineDirection === 'vertical' ? 'translateY' : 'translateX']: animatedValue,
          },
        ],
      }}
    />
  );
}

export default React.memo(AnimatedLine, equals);
