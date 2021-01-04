import React, { useEffect, useState } from 'react'

interface MessageProps {
    messageText: string
}

export const Message: React.FC<MessageProps> = (props) => {
    const { messageText } = props
    const [className, setClassName] = useState<string>('')

    useEffect(() => {
        console.log(messageText)
        setClassName('opacity-100')
        const timeout = setTimeout(() => setClassName('opacity-0 transition duration-1000'), 1500)
        return () => clearTimeout(timeout)
    }, [messageText])

    return <div className={`text-green-400 font-bold ${className}`}>{messageText}</div>
}
