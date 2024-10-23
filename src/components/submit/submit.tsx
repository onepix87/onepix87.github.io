// Potentially a button subtype?
import React, { InputHTMLAttributes } from 'react';
import classNames from './submit.module.css';

type SubmitProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Submit: React.FC<SubmitProps> = (props) => {
    return <input type='submit' className={classNames.submit} {...props} />;
}