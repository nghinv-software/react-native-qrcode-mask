# react-native-qrcode-mask

React Native QR Code Mask Component for IOS and Android

---

[![CircleCI](https://circleci.com/gh/nghinv-software/react-native-qrcode-mask.svg?style=svg)](https://circleci.com/gh/nghinv-software/react-native-qrcode-mask)
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]][all-contributors]
[![PRs Welcome][prs-welcome-badge]][prs-welcome]

<p align="center">
<img src="https://github.com/Nghi-NV/assets/blob/main/qrcode_mask1.GIF?raw=true" width="300"/>
<img src="https://github.com/Nghi-NV/assets/blob/main/qrcode_mask2.GIF?raw=true" width="300"/>
</p>

## Installation

```sh
yarn add react-native-qrcode-mask
```

or 

```sh
npm install react-native-qrcode-mask
```

## Usage

```js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';
import QrCodeMask from 'react-native-qrcode-mask';

function App() {
  return (
    <View style={styles.container}>
      <Camera>
        <QrCodeMask
          // lineColor='green'
          lineDirection='horizontal'
          height={80}
          edgeColor='red'
          topTitle='Bar Code Scanner'
          bottomTitle='Put the barcode into the box'
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default App;
```

# Property

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| width | `number` | `260` |  |
| height | `number` | `200` |  |
| overlayOpacity | `number` | `0.6` |  |
| showLineAnimated | `boolean` | `true` |  |
| lineThick | `number` | `2` |  |
| lineSize | `number \| string` | `80%` |  |
| lineBorderRadius | `number` | `2` |  |
| lineColor | `string` | `green` |  |
| lineAnimationDuration | `number` | `1500` | `ms` |
| lineDirection | `'vertical' \| 'horizontal'` | `vertical` |  |
| edgeWidth | `number` | `20` |  |
| edgeHeight | `number` | `20` |  |
| edgeColor | `string` | `white` |  |
| edgeBorderWidth | `number` | `2` |  |
| topTitle | `string` | `undefined` |  |
| topTitleColor | `string` | `white` |  |
| topTitleStyle | `TextStyle` | `undefined` |  |
| viewTopTitleStyle | `ViewStyle` | `undefined` |  |
| renderTop | `() => React.ReactNode` | `undefined` |  |
| bottomTitle | `string` | `undefined` |  |
| bottomTitleColor | `string` | `white` |  |
| bottomTitleStyle | `TextStyle` | `undefined` |  |
| viewBottomTitleStyle | `ViewStyle` | `undefined` |  |
| renderBottom | `() => React.ReactNode` | `undefined` |  |
| renderFrame | `() => React.ReactNode` | `undefined` |  |


[version-badge]: https://img.shields.io/npm/v/react-native-qrcode-mask.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-native-qrcode-mask
[license-badge]: https://img.shields.io/npm/l/react-native-qrcode-mask.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[all-contributors]: #contributors
[prs-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome]: http://makeapullrequest.com
