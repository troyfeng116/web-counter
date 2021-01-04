import React from 'react'

interface ButtonProps {
    title: string
    variant: ButtonVariant
    size: ButtonSize
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

export enum ButtonSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { title, size, variant, onClick, fullWidth } = props

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

    let pY = ''
    switch (size) {
        case ButtonSize.Small:
            pY = 'py-0'
            break
        case ButtonSize.Medium:
            pY = 'py-1'
            break
        case ButtonSize.Large:
            pY = 'py-2'
            break
    }

    return (
        <div className={`${fullWidth === true ? 'w-full' : ''} ${pY} px-4 cursor-pointer rounded shadow font-bold text-center ${baseClassName} ${hoverClassName}`} onClick={onClick}>
            {title}
        </div>
    )
}
