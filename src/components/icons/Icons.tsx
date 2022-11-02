import React, { memo, FC, MouseEventHandler, ReactNode } from 'react';
import { createCSSClass } from '../../utils/jsxHelpers';

type SvgProps = {
  width: number;
  height: number;
  viewBox: string;
  className?: string;
  onClick?: MouseEventHandler<SVGElement>;
  children?: ReactNode;
};
export type IconProps = {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  onClick?: MouseEventHandler<SVGElement>;
};

const SvgIcon: FC<SvgProps> = memo(({ width, height, viewBox, children, className, onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox={viewBox}
    className={createCSSClass(['svg-icon', className])}
    onClick={onClick}
  >
    {children}
  </svg>
));

export const IconDelete: FC<IconProps> = ({ className, color, onClick, width = 16, height = 16 }) => (
  <SvgIcon  viewBox="0 0 16 16" width={width} height={height} className={className} onClick={onClick}>
    <defs></defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(1.000000, 0.000000)" fill={color}>
      <path d="M0.982,5.073 L2.007,15.339 C2.007,15.705 2.314,16 2.691,16 L10.271,16 C10.648,16 10.955,15.705 10.955,15.339 L11.98,5.073 L0.982,5.073 L0.982,5.073 Z M7.033,14.068 L5.961,14.068 L5.961,6.989 L7.033,6.989 L7.033,14.068 L7.033,14.068 Z M9.033,14.068 L7.961,14.068 L8.961,6.989 L10.033,6.989 L9.033,14.068 L9.033,14.068 Z M5.033,14.068 L3.961,14.068 L2.961,6.989 L4.033,6.989 L5.033,14.068 L5.033,14.068 Z" className={color}></path>
      <path d="M12.075,2.105 L8.937,2.105 L8.937,0.709 C8.937,0.317 8.481,0 8.081,0 L4.986,0 C4.586,0 4.031,0.225 4.031,0.615 L4.031,2.011 L0.886,2.105 C0.485,2.105 0.159,2.421 0.159,2.813 L0.159,3.968 L12.8,3.968 L12.8,2.813 C12.801,2.422 12.477,2.105 12.075,2.105 L12.075,2.105 Z M4.947,1.44 C4.947,1.128 5.298,0.875 5.73,0.875 L7.294,0.875 C7.726,0.875 8.076,1.129 8.076,1.44 L8.076,2.105 L4.946,2.105 L4.946,1.44 L4.947,1.44 Z" className={color}></path>
      </g>
    </g>
  </SvgIcon> 
);

export const IconCheck: FC<IconProps> = ({ className, color, width = 12, height = 9 }) => (
  <SvgIcon width={width} height={height} viewBox='0 0 16 12' className={className} >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='Check-Mark/' transform='translate(-4.000000, -6.000000)' fill='#fff'>
        <path
          className={color}
          d='M8.24925816,17.4383036 L4.35608309,13.3310213 C3.88130564,12.8534303 3.88130564,11.9937666 4.35608309,11.5161756 C4.83086053,11.0385847 5.59050445,11.0385847 6.0652819,11.5161756 C6.0652819,11.5161756 6.0652819,11.5161756 6.0652819,11.5161756 L8.91394659,14.4772396 C9.29376855,14.8593124 9.86350148,14.8593124 10.2433234,14.4772396 C10.2433234,14.4772396 10.2433234,14.4772396 10.2433234,14.4772396 L17.9347181,6.35819322 C18.4094955,5.88060226 19.1691395,5.88060226 19.6439169,6.35819322 C19.6439169,6.35819322 19.6439169,6.35819322 19.6439169,6.35819322 C20.1186944,6.83578418 20.1186944,7.69544792 19.6439169,8.17303888 L10.9080119,17.3427854 C10.2433234,18.2024491 9.00890208,18.2024491 8.24925816,17.4383036 C8.24925816,17.4383036 8.24925816,17.4383036 8.24925816,17.4383036 Z'
          id='Check-Mark'
        />
      </g>
    </g>
  </SvgIcon>
);
