import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9fcfd115-549d-4663-a1d2-19ff09b145e6', title: 'PATENT_TITLE_3331' },
            { id: '495423ab-da89-460c-98d9-8ebb9e6cb8ad', title: 'PATENT_TITLE_4331' },
            { id: '90cc4a50-446f-4229-bfc1-2913bc289548', title: 'PATENT_TITLE_8409' },
            { id: '7915186b-378c-41b0-9bb9-924e65ee715f', title: 'PATENT_TITLE_6833' },
            { id: 'a21aeb7d-0cd4-4034-b150-a80c69ea2a63', title: 'PATENT_TITLE_7489' },
            { id: 'e7048b64-c554-4afe-991b-908babef7d7c', title: 'PATENT_TITLE_3303' },
            { id: 'd29a6c14-b03c-489b-a8bf-5bc873343078', title: 'PATENT_TITLE_5516' },
            { id: '9c0ff7d3-9394-4825-94e5-69c3db482570', title: 'PATENT_TITLE_4971' },
            { id: '49092eb6-d8ea-4d03-a6d4-7f0f1231ed24', title: 'PATENT_TITLE_9319' },
            { id: '3d988da8-f6a0-47e3-a379-bdf8777843bf', title: 'PATENT_TITLE_8553' },
        ]}
    />
)

export default App