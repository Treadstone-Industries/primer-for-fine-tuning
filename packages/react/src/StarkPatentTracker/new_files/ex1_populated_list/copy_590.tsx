import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b9b034e1-dce9-460a-9b10-e821d7f477ba', title: 'PATENT_TITLE_3608' },
            { id: '21871e5f-cbec-43df-bf2a-a0e127ccbc82', title: 'PATENT_TITLE_1782' },
            { id: 'a665d023-3148-4e4f-b328-aabe23fbc358', title: 'PATENT_TITLE_6502' },
            { id: '2c903e0a-440c-49c0-8388-e6b9eb2f5610', title: 'PATENT_TITLE_6897' },
            { id: 'fcb1812e-1db8-4991-b8b7-7d2d9bfe1db1', title: 'PATENT_TITLE_3665' },
            { id: '585897f9-2924-42fe-9c33-a3434e6ffc44', title: 'PATENT_TITLE_5214' },
            { id: 'c3808f32-0ef0-432b-a962-4f86b51b39ed', title: 'PATENT_TITLE_7871' },
        ]}
    />
)

export default App