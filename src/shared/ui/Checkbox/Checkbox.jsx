import React from "react";

export const Checkbox = ({
    type = 'checkbox',
    register,
    name,
    validation = {},
    errors,
    className = ''
}) => {
    return (
        <>
            <input
                type={type}
                className={className}
                {...register(name, validation)}
            />

        </>
    );
};