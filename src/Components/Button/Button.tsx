import React from 'react'

interface ButtonProps {
    title: string
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { title, onClick } = props
    return <div className="py-2 px-4 cursor-pointer" onClick={onClick}>{title}</div>
}
