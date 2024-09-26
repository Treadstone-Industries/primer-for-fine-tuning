import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f8bbba42-d8e8-4886-8032-b65be08d186e', title: 'PATENT_TITLE_7892' },
            { id: '8fb5aa13-647b-4c5b-af54-5a0b61f92e92', title: 'PATENT_TITLE_7859' },
            { id: 'f1886eae-5aba-42e0-b6a1-41c08df579a3', title: 'PATENT_TITLE_6289' },
            { id: 'da20fb39-372f-479a-9464-31115c7bdae3', title: 'PATENT_TITLE_2609' },
            { id: '6ab4e15f-6296-4718-bb3f-7082046db002', title: 'PATENT_TITLE_5518' },
            { id: 'ffa0fdb9-dcac-4bbf-b84a-48dbcf9e0bea', title: 'PATENT_TITLE_3295' },
            { id: 'f6c9ff0d-c1e5-40c1-811f-c8537580489d', title: 'PATENT_TITLE_9544' },
            { id: 'b2013c6d-31f1-41a3-883d-cf2be3ebee51', title: 'PATENT_TITLE_2762' },
            { id: '19dc784c-e083-4432-ae64-91c466ac34a9', title: 'PATENT_TITLE_8564' },
        ]}
    />
)

export default App