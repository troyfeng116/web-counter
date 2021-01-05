import React, { useState } from 'react'

import { generateId } from '../../Utils/generateId'
import Button, { ButtonSize, ButtonVariant } from '../Button'
import Counter from '../Counter'

export const RootPage: React.FC = () => {
    const [counterIds, setCounterIds] = useState<string[]>([generateId(10)])
    return (
        <div className="bg-blue-100 min-h-screen p-12">
            <div className="w-full flex flex-col items-center">
                {counterIds.map((id) => (
                    <Counter key={id} />
                ))}
                <Button
                    title="New counter"
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
