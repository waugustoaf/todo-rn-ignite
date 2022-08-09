declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}
