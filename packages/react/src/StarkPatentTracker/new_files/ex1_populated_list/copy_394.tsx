import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5c57b521-8ab3-42df-a90d-978b8f42ca62', title: 'PATENT_TITLE_7818' },
            { id: 'f18df34a-a7c3-4418-aaa5-3ffb7416f9af', title: 'PATENT_TITLE_3074' },
            { id: '92e5f373-9f08-4738-ab20-7d5634d1f010', title: 'PATENT_TITLE_9965' },
            { id: '558b404a-6c27-4612-9144-5c0e0ac223d6', title: 'PATENT_TITLE_1243' },
            { id: '65bbf729-09a7-481e-bf01-eb2b05f5deaf', title: 'PATENT_TITLE_7699' },
            { id: '629e3f6e-848c-4f1f-95ce-6716677de10b', title: 'PATENT_TITLE_4341' },
            { id: 'e3091664-8a9f-42dd-bdd0-0e4ae6f5d747', title: 'PATENT_TITLE_4278' },
            { id: '9d03a695-7cc1-4038-94ad-05e29dfa36bc', title: 'PATENT_TITLE_7795' },
        ]}
    />
)

export default App