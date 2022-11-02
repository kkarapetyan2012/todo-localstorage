import React, { memo, ChangeEventHandler, FC, ReactNode } from 'react';
import { createCSSClass } from '../../utils/jsxHelpers';
import { IconCheck } from '../icons/Icons';
import Title from '../title/Title';

type CheckboxProps = {
  name: string;
  checked: boolean;
  label?: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
};

const Checkbox: FC<CheckboxProps> = memo(
  ({ checked, className, onChange, name, disabled,  label }) => {
    return (
      <label className={createCSSClass(['checkbox_label', className])}>
        <input
          type='checkbox'
          className='checkbox'
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
        />
        <span className='checkbox_square'>
          {checked && <IconCheck width={16} height={16} className='checkbox_tick' color='white' />}
        </span>
        {label && 
          <Title tag='h3' className={`text-left text-truncate ${checked ? "text-through" : " "}`}>
            {label}
          </Title>
        }
      </label>
    );
  }
);

export default Checkbox;
