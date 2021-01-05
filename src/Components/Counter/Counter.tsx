import React, { useRef, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'

import { parseIntWithNaN } from '../../Utils/parseIntWithNaN'
import Button, { ButtonSize, ButtonVariant } from '../Button'
import { Message } from '../Message/Message'
import { TextField } from '../TextField/TextField'

interface CounterProps {
    deleteThisCounter: () => void
}

export const Counter: React.FC<CounterProps> = (props) => {
    const { deleteThisCounter } = props

    const [count, setCount] = useState<number>(0)
    const [newCountText, setNewCountText] = useState<string>('')
    const [incrementText, setIncrementText] = useState<string>('1')
    const increment = useRef<number>(1)
    const [messageText, setMessageText] = useState<string>('New counter added!')

    return (
        <div className="w-96 bg-white mx-auto shadow flex flex-col items-center mb-6 px-6 py-4">
            <div className="cursor-pointer w-max ml-auto mb-4 -mt-2 -mr-3 text-xl text-gray-400 hover:text-gray-500" onClick={deleteThisCounter}>
                <FaWindowClose />
            </div>
            <div className="w-full flex justify-between items-center bg-gray-200 py-1 px-4 mb-3 rounded-lg">
                <Message messageText={messageText} setMessageText={setMessageText} />
                <div className="text-5xl">{count}</div>
            </div>
            <div className="w-full flex items-center justify-between mb-9">
                <Button title="-" size={ButtonSize.Small} variant={ButtonVariant.Minus} onClick={() => setCount(count - increment.current)} />
                <Button title="+" size={ButtonSize.Small} variant={ButtonVariant.Plus} onClick={() => setCount(count + increment.current)} />
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
                        increment.current = x
                        setMessageText(`Increment set to ${x}`)
                    }}
                />
            </div>
        </div>
    )
}
