import React, { useEffect, useState } from 'react'

interface MessageProps {
    messageText: string
    setMessageText: React.Dispatch<React.SetStateAction<string>>
}

export const Message: React.FC<MessageProps> = (props) => {
    const { messageText, setMessageText } = props
    const [className, setClassName] = useState<string>('')

    useEffect(() => {
        if (messageText.length > 0) {
            console.log(messageText)
            setClassName('opacity-100')
            let innerTimeout: NodeJS.Timeout
            const timeout = setTimeout(() => {
                setClassName('opacity-0 transition duration-1000')
                innerTimeout = setTimeout(() => setMessageText(''), 1000)
            }, 1500)
            return () => {
                clearTimeout(timeout)
                clearTimeout(innerTimeout)
            }
        }
    }, [messageText])

    return <div className={`text-green-400 font-bold ${className}`}>{messageText}</div>
}
