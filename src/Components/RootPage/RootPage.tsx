import React, { useState } from 'react'

import { generateId } from '../../Utils/generateId'
import Button, { ButtonSize, ButtonVariant } from '../Button'
import Counter from '../Counter'

export const RootPage: React.FC = () => {
    const [counterIds, setCounterIds] = useState<string[]>([generateId(10)])

    const deleteCounterAt = (index: number): void => {
        if (counterIds.length <= 1) return
        const newCounterIds = counterIds.slice(0, index).concat(counterIds.slice(index + 1))
        setCounterIds(newCounterIds)
    }

    return (
        <div className="bg-blue-100 min-h-screen p-12 flex flex-col items-center">
            <header className="mb-8 text-4xl uppercase font-bold">Online Counter</header>
            <div className="w-full flex flex-col items-center">
                {counterIds.map((id, index) => (
                    <Counter key={id} deleteThisCounter={() => deleteCounterAt(index)} />
                ))}
                <Button
                    title="+ Add new counter"
                    variant={ButtonVariant.Green}
                    size={ButtonSize.Large}
                    onClick={() => {
                        setCounterIds([...counterIds, generateId(10)])
                    }}
                />
            </div>
        </div>
    )
}
