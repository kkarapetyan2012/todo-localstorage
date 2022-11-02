import React, {
  FC,
  useState,
  forwardRef,
  // FormEventHandler,
  ChangeEventHandler,
  // KeyboardEventHandler,
  MouseEventHandler,
  FocusEventHandler,
  MutableRefObject,
  useEffect,
  memo,
} from 'react';
import { createCSSClass } from '../../utils/jsxHelpers';

type InputRef = HTMLInputElement | HTMLTextAreaElement;
type InputProps = {
  name: string;
  // label?: string;
  value: string;
  type?: string;
  onChange: ChangeEventHandler<InputRef>;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  // error?: string;
  onFocus?: () => void;
  // onBlur?: ChangeEventHandler<InputRef>;
  // onKeyDown?: KeyboardEventHandler<InputRef>;
  disabled?: boolean;
  // isSelectToggle?: boolean;
  // isTextarea?: boolean;
};
const inputClass = 'input';

const Input: FC<InputProps> =
  (
    {
      name,
      // label,
      value,
      type = 'text',
      onChange,
      className,
      inputClassName,
      // error,
      onFocus,
      // onKeyDown,
      placeholder,
      disabled,
      // onBlur,
      // isSelectToggle,
      // isTextarea,
    },
    
  ) => {
    const [focused, setFocused] = useState(false);
    // const onInputHandler: FormEventHandler<InputRef> = (e) => {
    //   const el = e.target as HTMLInputElement;
    //   const validity = el.validity.badInput;
    //   el.value = el.value.trimStart();
    //   // validate for number fields
    //   if (type === 'number') {
    //     if (validity) {
    //       el.value = '';
    //     }
    //   }
    // };

    // const onBlurHandler: ChangeEventHandler<InputRef> = (e) => {
    //   if (value === '' || placeholder) {
    //     setFocused(false);
    //   }
    //   if (onBlur) {
    //     onBlur(e);
    //   }
    // };
    // const onFocusHandler: FocusEventHandler<InputRef> = () => {
    //   setFocused(true);
    //   if (onFocus) onFocus();
    // };
    const onClickHandler: MouseEventHandler<InputRef> = () => {
      setFocused(true);
      if (onFocus) onFocus();
    };
    useEffect(() => {
      if ((value === '' && !focused) || placeholder) {
        setFocused(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
      <div className={createCSSClass(['input_wrapper', className])}>
        
          <input
            // ref={ref as MutableRefObject<HTMLInputElement | null>}
            value={value}
            type={type}
            className={createCSSClass([inputClass, inputClassName], { focused: focused || value })}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            // onFocus={onFocusHandler}
            // onBlur={onBlurHandler}
            // onKeyDown={onKeyDown}
            autoComplete='off'
            disabled={disabled}
            // onInput={onInputHandler}
            onClick={onClickHandler}
          />
        
      </div>
    );
  }


export default memo(Input);
