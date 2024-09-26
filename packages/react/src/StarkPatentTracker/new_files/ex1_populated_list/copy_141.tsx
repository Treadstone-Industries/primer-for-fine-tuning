import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9053d2ac-7cb6-419e-9e1d-e1a60062235b', title: 'PATENT_TITLE_1250' },
            { id: '874c7f8c-c873-4e4d-b451-49506ad3ff1e', title: 'PATENT_TITLE_4507' },
            { id: '7c8a9693-46cc-45a1-ab1a-5e8babc3a233', title: 'PATENT_TITLE_8979' },
            { id: 'b247e80a-2da4-42b4-afb7-5769ebf23c04', title: 'PATENT_TITLE_4776' },
        ]}
    />
)

export default App