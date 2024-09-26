import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e148d4c1-67a5-45de-aa0c-0fef23076520', title: 'PATENT_TITLE_7220' },
            { id: '9579c9a1-c343-4cde-85ca-f4277a293355', title: 'PATENT_TITLE_8745' },
            { id: '65190416-34a6-4d2f-8d23-1b120d989c7e', title: 'PATENT_TITLE_6959' },
            { id: '9f116552-d28e-48f3-b463-b7106ccf6a50', title: 'PATENT_TITLE_7562' },
            { id: '1adba13b-6f67-4176-b892-40a385da91a0', title: 'PATENT_TITLE_9990' },
        ]}
    />
)

export default App