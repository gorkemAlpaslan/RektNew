// components/Button.tsx
"use client";

import React from 'react';

type ButtonProps = {
    label: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, disabled = false }) => {
    return (
        <button disabled={disabled} className="btn">
            {label}
        </button>
    );
};

export default Button;
