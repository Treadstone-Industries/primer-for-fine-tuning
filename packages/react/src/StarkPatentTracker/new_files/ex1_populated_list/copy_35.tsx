import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0b5c6cba-c38e-4167-be6a-70fb3fa1ec8d', title: 'PATENT_TITLE_4117' },
            { id: '617a1b6a-cf2a-426c-a2ed-bc8563c35a72', title: 'PATENT_TITLE_9430' },
            { id: '081caf9c-4f64-485c-a4fd-c08c39df70c7', title: 'PATENT_TITLE_6392' },
            { id: '825d6b55-763a-4180-82d2-3a7caa50a1f1', title: 'PATENT_TITLE_9808' },
            { id: 'deb20037-d2e5-49b5-acee-8cc9ac0ff28f', title: 'PATENT_TITLE_6734' },
            { id: 'ee35ade4-686f-4046-bc69-4184788ed486', title: 'PATENT_TITLE_2939' },
            { id: 'c731543f-9437-4a7f-841d-24736946eb45', title: 'PATENT_TITLE_4916' },
            { id: '63a2627f-b639-4854-8cc6-b5b93c501ee3', title: 'PATENT_TITLE_9257' },
            { id: 'a4d0bff1-2fc4-46a9-a901-f78f7bd51289', title: 'PATENT_TITLE_5714' },
            { id: '2c117c6a-da80-4c8b-b167-cc6c6c0f9eaf', title: 'PATENT_TITLE_7981' },
        ]}
    />
)

export default App