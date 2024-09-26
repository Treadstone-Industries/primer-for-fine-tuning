import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4c884686-6f51-4271-92d1-6b68a299dfc3', title: 'PATENT_TITLE_6908' },
            { id: '2cd61215-ee5b-478a-b79a-eecd79c29669', title: 'PATENT_TITLE_5506' },
            { id: '765817ab-6e83-474c-a6a4-caf14db3665a', title: 'PATENT_TITLE_4379' },
            { id: 'f8d12351-b548-43ee-a2e9-342c6c7d0f6a', title: 'PATENT_TITLE_1536' },
            { id: 'c543fc5d-f3b0-4abf-bf7f-e29606c2eb1d', title: 'PATENT_TITLE_5008' },
            { id: '1acdf30e-c5a7-497b-87a7-f41061532fad', title: 'PATENT_TITLE_3400' },
            { id: 'ca356487-42ae-4a5e-98c3-b84e4f36429a', title: 'PATENT_TITLE_6187' },
            { id: '12b490ac-827b-42ec-a146-2dea74bb451c', title: 'PATENT_TITLE_1148' },
            { id: '42f03c0b-92a6-4dbc-8696-1ffa6d2bd915', title: 'PATENT_TITLE_3207' },
        ]}
    />
)

export default App