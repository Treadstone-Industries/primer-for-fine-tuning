import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '472e7b82-6e3d-4fe6-8bfc-a5eb303f92be', title: 'PATENT_TITLE_8406' },
            { id: '138a1b4b-b0ed-40f5-b248-0791d8695baf', title: 'PATENT_TITLE_6792' },
            { id: '399b4fde-ba8b-44e4-8c60-c743ef729905', title: 'PATENT_TITLE_5923' },
            { id: '7adaae2e-f7aa-4d3a-a552-ba14c3c91f0f', title: 'PATENT_TITLE_6343' },
            { id: '451df3b5-b096-44f6-94f9-77f47a2f97b7', title: 'PATENT_TITLE_4078' },
            { id: '4070b240-850e-4413-8b7e-99d6fd53af62', title: 'PATENT_TITLE_3585' },
            { id: 'a4454adf-4a50-493b-890f-4d884659a87f', title: 'PATENT_TITLE_9081' },
            { id: 'c5cb0faa-c2c8-474e-8d6d-c5acc83ba371', title: 'PATENT_TITLE_2803' },
            { id: '4b027492-5f43-4fcb-9136-0a07ae4a4276', title: 'PATENT_TITLE_5997' },
            { id: '34c9db7c-8312-4796-8022-24fc0370957a', title: 'PATENT_TITLE_7494' },
        ]}
    />
)

export default App