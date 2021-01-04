import React, { useState } from 'react'

import Button, { ButtonVariant } from '../Button'
import { ButtonSize } from '../Button/Button'
import { TextField } from '../TextField/TextField'

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [newCountText, setNewCountText] = useState<string>('')
    const [incrementText, setIncrementText] = useState<string>('1')
    const [increment, setIncrement] = useState<number>(1)

    const parseIntWithNaN = (s: string): number => {
        const n = parseInt(s)
        return isNaN(n) ? 0 : n
    }

    return (
        <div className="w-96 bg-white mx-auto shadow flex flex-col items-center mb-6 p-6">
            <div className="w-full bg-gray-200 py-1 px-4 text-3xl text-right mb-3 rounded-lg">{count}</div>
            <div className="w-full flex items-center justify-between mb-9">
                <Button title="-" size={ButtonSize.Small} variant={ButtonVariant.Minus} onClick={() => setCount(count - increment)} />
                <Button title="+" size={ButtonSize.Small} variant={ButtonVariant.Plus} onClick={() => setCount(count + increment)} />
            </div>
            <div className="w-full mb-3">
                <Button title="Reset counter" size={ButtonSize.Medium} variant={ButtonVariant.Grey} onClick={() => setCount(0)} fullWidth={true} />
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
                        setCount(parseIntWithNaN(newCountText))
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
                    }}
                />
            </div>
        </div>
    )
}
