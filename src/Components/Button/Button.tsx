import React from 'react'

interface ButtonProps {
    title: string
    variant: ButtonVariant
    onClick: () => void
}

export enum ButtonVariant {
    Green = 'Green',
    Red = 'Red',
    Grey = 'Grey',
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { title, variant, onClick } = props

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
    }
    return (
        <div
            className={`py-2 px-4 cursor-pointer rounded shadow ${baseClassName} ${hoverClassName}`}
            onClick={onClick}
        >
            {title}
        </div>
    )
}
