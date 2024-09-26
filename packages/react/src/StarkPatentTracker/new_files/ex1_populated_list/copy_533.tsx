import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b50097a2-75a0-4cbc-ad72-aac433f3feee', title: 'PATENT_TITLE_1451' },
            { id: '78f903fc-3cac-4f49-8b9e-e6bf81f3ddba', title: 'PATENT_TITLE_7813' },
            { id: '0b34096d-fa87-4753-8c3a-05ec47cc3c80', title: 'PATENT_TITLE_9782' },
            { id: '27abd37a-f69c-4d20-96ad-31a589ca55b8', title: 'PATENT_TITLE_2939' },
            { id: '33ef39f5-5f88-4f9b-8d4d-6b634c196438', title: 'PATENT_TITLE_7615' },
            { id: 'ef887906-bded-4a2a-a3ad-807ccd00e7da', title: 'PATENT_TITLE_5629' },
            { id: '8c7c76ef-822c-439e-a3b6-0233222f2cf5', title: 'PATENT_TITLE_4046' },
        ]}
    />
)

export default App