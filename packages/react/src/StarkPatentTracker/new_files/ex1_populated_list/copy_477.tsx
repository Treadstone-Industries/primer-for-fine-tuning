import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '814c7c54-6c52-4c29-8b0b-4b449f99f18b', title: 'PATENT_TITLE_7608' },
            { id: '2ec4bf89-94e6-4a51-901b-2bfe826f24d3', title: 'PATENT_TITLE_6633' },
            { id: '5f856342-5fb5-4047-b5a7-c71ec8ca87f4', title: 'PATENT_TITLE_8538' },
            { id: '347be2cb-4531-42da-b86a-166def428eb6', title: 'PATENT_TITLE_1461' },
            { id: 'b0ddb0f1-7650-4fab-b4be-95462d99dba8', title: 'PATENT_TITLE_5872' },
            { id: '2b865546-f4e5-4301-9e25-5ed0c09ea39c', title: 'PATENT_TITLE_1004' },
        ]}
    />
)

export default App