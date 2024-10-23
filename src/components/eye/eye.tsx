import React, { SVGProps } from 'react';

type EyeProps = {
    size?: number;
} & SVGProps<HTMLOrSVGElement>

export const Eye: React.FC<EyeProps> = ({ size = 80, ...props }) => {
    return <svg viewBox="0 0 80 80" width={size} height={size} {...props} >
        <mask id="highlight">
            <rect width="100%" height="100%" fill="white"/>
            <circle r="10" cx="59" cy="21" fill="black"/>
        </mask>
        <circle cx="40" cy="40" r="35" fill="currentColor" mask="url(#highlight)" />
    </svg>;
}