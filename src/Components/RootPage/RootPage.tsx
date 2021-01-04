import React, { useState } from 'react'

import Button, { ButtonSize, ButtonVariant } from '../Button'
import Counter from '../Counter'

export const RootPage: React.FC = () => {
    const [counterComponents, setCounterComponents] = useState<React.ReactElement[]>([<Counter key={0} />])
    return (
        <div className="bg-blue-100 min-h-screen p-12">
            <div className="w-full flex flex-col items-center">
                {counterComponents}
                <Button
                    title="New counter"
                    variant={ButtonVariant.Green}
                    size={ButtonSize.Large}
                    onClick={() => {
                        setCounterComponents([...counterComponents, <Counter key={counterComponents.length} />])
                    }}
                />
            </div>
        </div>
    )
}
