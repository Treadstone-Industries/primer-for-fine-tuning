import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bff53002-1f4a-4c57-af11-8501424df819', title: 'PATENT_TITLE_9750' },
            { id: '7279b832-e7e5-41f6-aaee-39a1a4388466', title: 'PATENT_TITLE_8376' },
            { id: '42c618aa-186d-449c-967a-03e3f47da16d', title: 'PATENT_TITLE_3652' },
            { id: '66ae94d9-199b-48eb-a7bb-5bcd24ac580d', title: 'PATENT_TITLE_6012' },
            { id: '24830648-d367-44a0-9c57-d39a0b8cc5ad', title: 'PATENT_TITLE_9261' },
            { id: '7dc4c2d2-3757-40d6-a3d4-38235b5acea1', title: 'PATENT_TITLE_9804' },
        ]}
    />
)

export default App