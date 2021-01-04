import React from 'react'

interface ButtonProps {
    title: string
    variant: ButtonVariant
    onClick: () => void
    fullWidth?: boolean
}

export enum ButtonVariant {
    Green = 'Green',
    Red = 'Red',
    Grey = 'Grey',
    Plus = 'Plus',
    Minus = 'Minus',
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { title, variant, onClick, fullWidth } = props

    let baseClassName = ''
    let hoverClassName = ''
    switch (variant) {
        case ButtonVariant.Green:
            baseClassName = 'bg-green-400 text-white'
            hoverClassName = 'hover:bg-green-500'
            break
        case ButtonVariant.Red:
            baseClassName = 'bg-red-400 text-white'
            hoverClassName = 'hover:bg-red-500'
            break
        case ButtonVariant.Grey:
            baseClassName = 'bg-gray-400 text-white'
            hoverClassName = 'hover:bg-gray-500'
            break
        case ButtonVariant.Plus:
            baseClassName = 'bg-gray-600 text-green-300 text-3xl py-0 px-16'
            hoverClassName = 'hover:bg-gray-700'
            break
        case ButtonVariant.Minus:
            baseClassName = 'bg-gray-600 text-red-300 text-3xl py-0 px-16'
            hoverClassName = 'hover:bg-gray-700'
            break
    }

    return (
        <div className={`${fullWidth === true ? 'w-full' : ''} py-1 px-4 cursor-pointer rounded shadow font-bold text-center ${baseClassName} ${hoverClassName}`} onClick={onClick}>
            {title}
        </div>
    )
}
