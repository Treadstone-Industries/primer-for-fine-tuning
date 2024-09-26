import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a0f0a2a8-a8a4-42ee-bbbe-b096f67354ba', title: 'PATENT_TITLE_6247' },
            { id: '56474755-3c92-4446-b86f-779867bb19ec', title: 'PATENT_TITLE_3421' },
            { id: '0ed0b2c4-bdfe-4cff-a545-f0e471beb09b', title: 'PATENT_TITLE_8499' },
            { id: '74fa4e73-8928-4441-9623-dcd1235b57a2', title: 'PATENT_TITLE_3800' },
            { id: 'd1a5cbd0-510e-42f5-99fb-222afc73b7bb', title: 'PATENT_TITLE_3826' },
            { id: 'a7d9da35-c8b0-4344-829a-fd98db921412', title: 'PATENT_TITLE_7966' },
            { id: 'e0e07f85-8a5f-4ecd-bff4-9c5fe0f82f6a', title: 'PATENT_TITLE_5547' },
            { id: '81c55dc8-069b-43b2-8695-48642a1c8e2d', title: 'PATENT_TITLE_1194' },
        ]}
    />
)

export default App