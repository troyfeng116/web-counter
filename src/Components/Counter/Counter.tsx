import React, { useState } from 'react'

import Button, { ButtonVariant } from '../Button'

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div className="w-96 bg-white mx-auto shadow flex flex-col items-center mb-6 p-6">
            <div className="w-full bg-gray-200 py-1 px-4 text-3xl text-right mb-3 rounded-lg">{count}</div>
            <div className="w-full flex items-center justify-between">
                <Button title="-" variant={ButtonVariant.Minus} onClick={() => setCount(count - 1)} />
                <Button title="+" variant={ButtonVariant.Plus} onClick={() => setCount(count + 1)} />
            </div>
        </div>
    )
}
