import React, { FormEvent, useState, FocusEvent } from 'react';
import classNames from './login.module.css';

import { Input } from '../../components/input';
import { Submit } from '../../components/submit';
import { Eye } from '../../components/eye';
import { login } from '../../api/auth';

type Field = 'email' | 'password' | null;

export const Login: React.FC = () => {
    const [emailPos, setEmailPos] = useState<number>(0);
    const [activeField, setActiveField] = useState<Field>(null);

    const onEmailChange = (e: FormEvent) => {
        setEmailPos(Math.min((e.target as HTMLInputElement)?.value?.length ?? 0, 30) * 9.65);
    }

    const changeActiveField = (e: FocusEvent) => {
        if (e.type === 'focus') setActiveField(e.target?.type ?? null)
        else setActiveField(null)
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // May be a store method call.
        await login(data);
    }

    const leftRot = (Math.atan2(-177, emailPos - 94) * (180 / Math.PI) * -1);
    const rightRot = (Math.atan2(-177, emailPos - 196) * (180 / Math.PI) * -1);

    let leftStyle = {};
    let rightStyle = {};
    let eyelidStyle = {};

    if (activeField === 'email') {
        leftStyle = { transform: `translate(${15 * Math.cos(Math.PI * 2 * leftRot/360)}px, 15px)` };
        rightStyle = { transform: `translate(${15 * Math.cos(Math.PI * 2 * rightRot/360)}px, 15px)` };
    }

    if (activeField === 'password') {
        leftStyle = { transform: `translate(${12 * Math.cos(Math.PI * 2 * 20/360)}px, -30px)` };
        rightStyle = { transform: `translate(${12 * Math.cos(Math.PI * 2 * 45/360)}px, -30px)` };
        eyelidStyle = { transform: `translate(0, -18px)` };
    }

    return <section className={classNames.section}>
        <h1 className={classNames.title}>Log In Form</h1>
        <div className={classNames.eyes}>
            <div className={classNames.eyeWrapper}>
                <div className={classNames.eyeLid} style={eyelidStyle} />
                <div className={classNames.eye} style={leftStyle}>
                    <Eye size={65}/>
                </div>
            </div>
            <div className={classNames.eyeWrapper}>
                <div className={classNames.eyeLid} style={eyelidStyle} />
                <div className={classNames.eye} style={rightStyle}>
                    <Eye size={65}/>
                </div>
            </div>
        </div>
        <div className={classNames.container}>
            <form className={classNames.form} onSubmit={onSubmit}>
                <Input onFocus={changeActiveField} onBlur={changeActiveField} onInput={onEmailChange} type="email" label="Email" name="email" required />
                <Input onFocus={changeActiveField} onBlur={changeActiveField} type="password" label="Password" name="password" required />
                <Submit value="Log In"/>
            </form>
        </div>
    </section>;
}