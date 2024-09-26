import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '74eb710b-bc8c-41f9-a590-a011cde710da', title: 'PATENT_TITLE_6086' },
            { id: '3f46d891-ceba-408d-bfa7-a02ae4fbfb24', title: 'PATENT_TITLE_9943' },
            { id: '72d7e6ed-c94b-4625-af4a-0a2fc2794b6d', title: 'PATENT_TITLE_5009' },
        ]}
    />
)

export default App