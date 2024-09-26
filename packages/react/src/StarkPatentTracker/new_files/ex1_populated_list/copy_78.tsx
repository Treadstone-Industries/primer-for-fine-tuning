import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cba7b847-70a2-43fa-aafb-ab7ee8ff2a14', title: 'PATENT_TITLE_6097' },
            { id: 'bf93bf7d-5e65-435a-82bf-4d0b240bf562', title: 'PATENT_TITLE_9188' },
            { id: '0c078563-c19c-4880-a53d-0199de7ce3a4', title: 'PATENT_TITLE_2651' },
            { id: '63f4522a-7fc7-4606-b6b4-81df0b278e28', title: 'PATENT_TITLE_5980' },
            { id: 'f841b12e-d5ed-4850-aabc-5f58749a7af1', title: 'PATENT_TITLE_2442' },
        ]}
    />
)

export default App