import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c0a15dae-cbe1-45d3-9240-a2902f8c51c0', title: 'PATENT_TITLE_6676' },
            { id: 'ea48c8b2-e77b-4b28-aa4c-933bcc4e2bcd', title: 'PATENT_TITLE_5914' },
            { id: 'afca249c-2d24-4da8-bd7f-12c10448063b', title: 'PATENT_TITLE_1026' },
            { id: '34665bc0-f745-4d56-a881-ba6de5353d0a', title: 'PATENT_TITLE_7042' },
            { id: '2ff25edc-4139-44e9-8b59-93d5257dc9f6', title: 'PATENT_TITLE_8234' },
            { id: 'd030e8d1-c7d0-43d1-9dd4-199881875c2c', title: 'PATENT_TITLE_6113' },
            { id: 'e2938b57-c88e-44ba-aa95-1fadaf3aad1b', title: 'PATENT_TITLE_4547' },
            { id: 'ef27fab3-d083-4b6a-8be9-6e8784b2a32d', title: 'PATENT_TITLE_2710' },
            { id: '90170c33-559a-4784-bc9a-0b758cf87ab4', title: 'PATENT_TITLE_4849' },
        ]}
    />
)

export default App