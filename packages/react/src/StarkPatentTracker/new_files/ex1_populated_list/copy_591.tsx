import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f8ffca49-d6aa-4485-aed0-c9cc54b66366', title: 'PATENT_TITLE_7300' },
            { id: '75d6126d-e8eb-4960-ad70-2de4c9b1d725', title: 'PATENT_TITLE_6600' },
            { id: '1658ac35-b87a-436b-8b47-51b470d83a56', title: 'PATENT_TITLE_8922' },
            { id: '6fd93a3a-58d3-4bf4-8b40-30bb3a0978f0', title: 'PATENT_TITLE_2083' },
            { id: '931fad70-7c09-41ec-92b2-f043c85afdba', title: 'PATENT_TITLE_6421' },
            { id: '2eab9f50-588a-483d-b0e0-961279a44d19', title: 'PATENT_TITLE_8376' },
        ]}
    />
)

export default App