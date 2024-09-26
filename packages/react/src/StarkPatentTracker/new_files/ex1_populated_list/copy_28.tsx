import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '71d95f8d-e5a9-4f86-a55b-27187bcf62aa', title: 'PATENT_TITLE_9334' },
            { id: '1d2550a0-f7b5-4211-bd1e-2d105252eec7', title: 'PATENT_TITLE_8120' },
            { id: 'c6044101-cbfc-43da-9954-967ccf9478bf', title: 'PATENT_TITLE_4299' },
            { id: 'f9b15766-3873-4a3e-ab95-409714e403c8', title: 'PATENT_TITLE_7923' },
            { id: '0161eb66-b93e-4f44-8030-1e1b3eb1b5da', title: 'PATENT_TITLE_5271' },
            { id: '898e5af3-d8f1-4132-a8b9-ba2f58a94808', title: 'PATENT_TITLE_1900' },
            { id: 'ae031aa1-05b6-4927-92ed-ca7c40c52122', title: 'PATENT_TITLE_1575' },
            { id: 'aa9fd93c-91af-43e4-9805-83c18a4c90f7', title: 'PATENT_TITLE_1234' },
        ]}
    />
)

export default App