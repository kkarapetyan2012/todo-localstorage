import React, {
  FC,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  memo,
} from 'react';
import { createCSSClass } from '../../utils/jsxHelpers';

type InputRef = HTMLInputElement | HTMLTextAreaElement;
type InputProps = {
  name: string;
  value: string;
  type?: string;
  onChange: ChangeEventHandler<InputRef>;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  onFocus?: () => void;
  disabled?: boolean;
};
const inputClass = 'input';

const Input: FC<InputProps> =
  (
    {
      name,
      value,
      type = 'text',
      onChange,
      className,
      inputClassName,
      onFocus,
      placeholder,
      disabled,
    },
    
  ) => {
    const [focused, setFocused] = useState(false);
    const onClickHandler: MouseEventHandler<InputRef> = () => {
      setFocused(true);
      if (onFocus) onFocus();
    };
    useEffect(() => {
      if ((value === '' && !focused) || placeholder) {
        setFocused(false);
      }
    }, [value, focused, placeholder]);

    return (
      <div className={createCSSClass(['input_wrapper', className])}>
        
          <input
            value={value}
            type={type}
            className={createCSSClass([inputClass, inputClassName], { focused: focused || value })}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete='off'
            disabled={disabled}
            onClick={onClickHandler}
          />
        
      </div>
    );
  }


export default memo(Input);
