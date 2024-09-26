import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dd559575-13fa-4277-8f3b-487952655052', title: 'PATENT_TITLE_9189' },
            { id: 'e8d659ae-1b57-4194-9c68-12b753d57044', title: 'PATENT_TITLE_8577' },
            { id: 'a0a20359-5581-42da-8935-cf58a29d08f6', title: 'PATENT_TITLE_3609' },
            { id: 'dd534707-f649-43c9-ba1b-73cfc84ffc54', title: 'PATENT_TITLE_9760' },
            { id: 'ecd69617-5443-414d-adb2-43cb9493c07c', title: 'PATENT_TITLE_2799' },
            { id: 'e1448561-ea64-46fc-8639-a9282d906b57', title: 'PATENT_TITLE_1607' },
        ]}
    />
)

export default App