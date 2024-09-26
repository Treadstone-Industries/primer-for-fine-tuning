import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '77e6e9d2-fa53-4ac9-b21d-8ab22b1bb564', title: 'PATENT_TITLE_2028' },
            { id: 'a244c2b6-d850-4386-9cd0-c0374f221bd6', title: 'PATENT_TITLE_6448' },
            { id: '4531e802-a06b-4a2e-a6e3-67be0c7550e0', title: 'PATENT_TITLE_4842' },
            { id: '79ff2d98-aab3-4de4-91f6-0042adf75a2e', title: 'PATENT_TITLE_5607' },
            { id: 'a86cc371-50a7-4876-b86f-35b50987f414', title: 'PATENT_TITLE_3757' },
            { id: 'ba771df8-e0df-486a-ace9-86e37263a585', title: 'PATENT_TITLE_6788' },
            { id: '37a39d37-64de-4f2f-9676-2c869ef5a5e9', title: 'PATENT_TITLE_7418' },
            { id: 'fd02f93f-33fb-4c9e-baf9-a7d494c7448c', title: 'PATENT_TITLE_3776' },
        ]}
    />
)

export default App