import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b0b33ec7-750e-4631-9be8-9080b696dfa3', title: 'PATENT_TITLE_9206' },
            { id: '6afecce4-7dce-4611-b177-50d5d46715cd', title: 'PATENT_TITLE_6870' },
            { id: '818aefb8-6d83-4b18-a392-12ba7bc242a7', title: 'PATENT_TITLE_4983' },
            { id: '4ecda80b-9c01-448f-ab4c-bda3dc657dc9', title: 'PATENT_TITLE_3370' },
            { id: '91d5e536-d484-4fc9-9c5b-40021a54dca5', title: 'PATENT_TITLE_1750' },
            { id: 'ca6b8d03-035e-4103-92d9-5b723c6e7614', title: 'PATENT_TITLE_4258' },
        ]}
    />
)

export default App