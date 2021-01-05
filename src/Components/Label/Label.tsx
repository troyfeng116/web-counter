import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'

import Button, { ButtonSize, ButtonVariant } from '../Button'
import TextField from '../TextField'

export const Label: React.FC = () => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [labelText, setLabelText] = useState<string>('Counter Title')

    if (isEditMode) {
        return (
            <div className="w-full bg-gray-200 rounded flex justify-between items-center">
                <div className="text-2xl mr-6">
                    <TextField placeholder="Counter" value={labelText} onChange={(e) => setLabelText(e.target.value)} fullWidth={true} />
                </div>
                <Button title="Save" variant={ButtonVariant.Grey} size={ButtonSize.Medium} onClick={() => setIsEditMode(false)} />
            </div>
        )
    }

    return (
        <div className="w-full bg-gray-200 rounded flex justify-between items-center px-2">
            <div className="text-2xl" onClick={() => setIsEditMode(true)}>
                {labelText}
            </div>
            <div className="cursor-pointer text-xl text-gray-400 hover:text-gray-500" onClick={() => setIsEditMode(true)}>
                <FaPen />
            </div>
        </div>
    )
}
