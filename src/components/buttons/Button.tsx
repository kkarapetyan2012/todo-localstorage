import React, {
    FC,
    CSSProperties,
    MouseEventHandler,
    ReactNode,
  } from 'react';
  import { createCSSClass } from '../../utils/jsxHelpers';
  
  const btnStaticClassName = 'btn';
  const btnClasses = {
    none: 'btn__none',
    main: 'btn__main',
    outlined: 'btn__outlined',
    gray: 'btn__darkGray ',
    danger: 'btn__danger'
  };
  
  type BtnRef = HTMLButtonElement;
  type BtnProps = {
    type?: 'button' | 'submit';
    mode?: 'none' | 'main' | 'outlined' | 'gray' | 'danger';
    onClick?: MouseEventHandler<BtnRef>;
    name?: string;
    value?: string | number;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
  };
  
  const Btn: FC<BtnProps> =
    (
      {
        type = 'button',
        mode = 'none',
        onClick,
        name,
        value,
        disabled,
        className,
        style,
        children,
      }
    ) => {
      const btnClass = createCSSClass([btnStaticClassName, btnClasses[mode], className]);
      return (
        <button
          type={type}
          onClick={onClick}
          name={name}
          value={value}
          disabled={disabled}
          className={btnClass}
          style={style}
        >
          {children}
        </button>
      );
    }
  
  export default Btn;
  