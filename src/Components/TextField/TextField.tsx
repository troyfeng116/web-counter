import React from 'react'

interface TextFieldProps {
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    size?: number
}

export const TextField: React.FC<TextFieldProps> = (props) => {
    const { placeholder, onChange, value, size } = props
    return <input type="text" placeholder={placeholder} value={value} onChange={onChange} size={size} className="bg-gray-400 rounded focus:outline-none px-2 text-white" />
}
