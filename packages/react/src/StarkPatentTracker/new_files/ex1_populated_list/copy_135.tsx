import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7d6402c6-b8e1-4479-ab4e-179a5c57da4e', title: 'PATENT_TITLE_1691' },
            { id: 'cf9417a7-813e-4bae-ad24-0e464f120925', title: 'PATENT_TITLE_3574' },
            { id: '62626312-deba-4afc-9dfa-16bfe6dae2ed', title: 'PATENT_TITLE_8115' },
            { id: 'b96e58d7-bf3e-419e-a038-5ae468e0df5c', title: 'PATENT_TITLE_1692' },
            { id: 'ed009092-9e9e-48ae-869b-2e0dc49ae3cb', title: 'PATENT_TITLE_7246' },
        ]}
    />
)

export default App