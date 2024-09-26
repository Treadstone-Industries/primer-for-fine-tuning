import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4208d0dc-b6e5-4a35-b4a5-e4c80425a6f9', title: 'PATENT_TITLE_7787' },
            { id: '88a36538-cfbb-43c4-b2df-ce1e6a65505c', title: 'PATENT_TITLE_4195' },
            { id: '3c0d325a-a239-4a6c-b333-5f3037968f8b', title: 'PATENT_TITLE_6481' },
            { id: '1cc098e2-f788-4b8e-b875-8994e34577d5', title: 'PATENT_TITLE_7631' },
            { id: 'a5e83ebf-2418-4fe0-a151-1ac6281bcc3c', title: 'PATENT_TITLE_8980' },
            { id: '48501535-c9cb-421b-bd1f-c558f1fd2ae6', title: 'PATENT_TITLE_6923' },
            { id: 'e8b24184-6d1b-4387-aa5b-d42b905dffb2', title: 'PATENT_TITLE_5492' },
            { id: '23ec49fd-f94f-4f15-85bb-a301a13cf0b9', title: 'PATENT_TITLE_8669' },
        ]}
    />
)

export default App