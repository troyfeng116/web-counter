import React, { useState } from 'react'

import Button, { ButtonVariant } from '../Button'
import { ButtonSize } from '../Button/Button'
import { Message } from '../Message/Message'
import { TextField } from '../TextField/TextField'

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [newCountText, setNewCountText] = useState<string>('')
    const [incrementText, setIncrementText] = useState<string>('1')
    const [increment, setIncrement] = useState<number>(1)
    const [messageText, setMessageText] = useState<string>('New counter added!')

    const parseIntWithNaN = (s: string): number => {
        const n = parseInt(s)
        return isNaN(n) ? 0 : n
    }

    return (
        <div className="w-96 bg-white mx-auto shadow flex flex-col items-center mb-6 p-6">
            <div className="w-full flex justify-between items-center bg-gray-200 py-1 px-4 mb-3 rounded-lg">
                <Message messageText={messageText} />
                <div className="text-5xl">{count}</div>
            </div>
            <div className="w-full flex items-center justify-between mb-9">
                <Button title="-" size={ButtonSize.Small} variant={ButtonVariant.Minus} onClick={() => setCount(count - increment)} />
                <Button title="+" size={ButtonSize.Small} variant={ButtonVariant.Plus} onClick={() => setCount(count + increment)} />
            </div>
            <div className="w-full mb-3">
                <Button
                    title="Reset counter"
                    size={ButtonSize.Medium}
                    variant={ButtonVariant.Grey}
                    onClick={() => {
                        setCount(0)
                        setMessageText('Count reset!')
                    }}
                    fullWidth={true}
                />
            </div>
            <div className="flex justify-center items-center w-full bg-gray-200 py-1 px-4 mb-3 rounded">
                <div className="mr-4">Set to:</div>
                <TextField
                    placeholder=""
                    value={newCountText}
                    onChange={(e) => {
                        const regex = /^\d*$/
                        if (e.target.value.match(regex)) setNewCountText(e.target.value)
                    }}
                    size={8}
                />
                <div className="w-2" />
                <Button
                    title="Set"
                    size={ButtonSize.Small}
                    variant={ButtonVariant.Grey}
                    onClick={() => {
                        const x = parseIntWithNaN(newCountText)
                        setCount(x)
                        setMessageText(`Counter set to ${x}`)
                    }}
                />
            </div>
            <div className="flex justify-center items-center w-full bg-gray-200 py-1 px-4 mb-3 rounded">
                <div className="mr-4">Increment:</div>
                <TextField
                    placeholder=""
                    value={incrementText}
                    onChange={(e) => {
                        const regex = /^\d*$/
                        if (e.target.value.match(regex)) {
                            setIncrementText(e.target.value)
                        }
                    }}
                    size={5}
                />
                <div className="w-2" />
                <Button
                    title="Set"
                    size={ButtonSize.Small}
                    variant={ButtonVariant.Grey}
                    onClick={() => {
                        const x = parseIntWithNaN(incrementText)
                        setIncrement(x)
                        setMessageText(`Increment set to ${x}`)
                    }}
                />
            </div>
        </div>
    )
}
