import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4202ac53-0847-456f-8a9a-0adadf0ae92a', title: 'PATENT_TITLE_4301' },
            { id: '8e423fad-8b1e-4cb4-8215-1f0d5f9b351a', title: 'PATENT_TITLE_6370' },
            { id: 'f589c196-a3ea-429a-b5c7-f8a426487323', title: 'PATENT_TITLE_3136' },
            { id: '1a672040-f81d-4614-9af5-ef698aeb0884', title: 'PATENT_TITLE_6521' },
        ]}
    />
)

export default App