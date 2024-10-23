import React, { InputHTMLAttributes, useId } from 'react';
import classNames from './input.module.css';

type InputProps = {
    label?: string;
    onChange?: (val: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({label, id, onChange, ...props}) => {
    const inputId = id ?? useId();

    return <div className={classNames.container}>
        {label && <label htmlFor={inputId} className={classNames.label}>{label}</label>}
        <input id={inputId} className={classNames.input} {...props} />
    </div>;
}