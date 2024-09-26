import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c972e66b-c45c-49c2-89f7-8eed4f7e6649', title: 'PATENT_TITLE_4041' },
            { id: '2b5699a2-b9bb-428d-84f4-3614de826980', title: 'PATENT_TITLE_9905' },
            { id: 'c096605f-b49f-447f-9916-a1131a426c56', title: 'PATENT_TITLE_6789' },
            { id: '91ef3fad-9d1a-4963-95b0-39273b9b547c', title: 'PATENT_TITLE_9344' },
            { id: '3c9fa823-3641-4667-9faf-cf80ddc34908', title: 'PATENT_TITLE_2396' },
            { id: '9a4600ed-8d2f-47e5-b096-605c7e330fc7', title: 'PATENT_TITLE_7089' },
            { id: 'e6ecad57-04cc-4608-9099-8f21892428f4', title: 'PATENT_TITLE_3247' },
        ]}
    />
)

export default App