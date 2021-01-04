import React, { useState } from 'react'
import Button from '../Button'
import Counter from '../Counter'

export const RootPage: React.FC = () => {
    const [counterComponents, setCounterComponents] = useState<React.ReactElement[]>([<Counter key={0} />])
    return (
        <div className="bg-blue-100 min-h-screen p-12">
            {counterComponents}
            <Button
                title="New counter"
                onClick={() => {
                    setCounterComponents([...counterComponents, <Counter key={counterComponents.length} />])
                }}
            />
        </div>
    )
}
