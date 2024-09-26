import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '187e7af0-6871-4d88-b049-a6e20c5bfd60', title: 'PATENT_TITLE_6214' },
            { id: '5235a085-1d17-4086-aa17-6e1fe581ac6c', title: 'PATENT_TITLE_7225' },
            { id: 'ee12c593-402f-46cc-91c7-1b3aef0d9587', title: 'PATENT_TITLE_1513' },
            { id: 'b52eef36-7efd-4ff8-9bf3-d8ab48fdf5d2', title: 'PATENT_TITLE_7088' },
        ]}
    />
)

export default App