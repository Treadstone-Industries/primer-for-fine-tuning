import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '54b722ad-2595-4426-b32d-33a45e26a3cd', title: 'PATENT_TITLE_6888' },
            { id: '62e8e35f-5cd5-4862-b8a0-06e4945dec62', title: 'PATENT_TITLE_6883' },
            { id: 'c6d98013-a697-41b7-b5dd-55e32b381aa8', title: 'PATENT_TITLE_9297' },
            { id: 'a7ca83a2-46c8-4091-bc32-744026b32657', title: 'PATENT_TITLE_5551' },
            { id: '669166d0-4926-44a9-8341-bbf9f874c759', title: 'PATENT_TITLE_1537' },
            { id: '762d1bad-5b3b-434c-a24e-5338000b0a2c', title: 'PATENT_TITLE_7901' },
        ]}
    />
)

export default App