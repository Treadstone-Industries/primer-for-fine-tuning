import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9f06d525-6cd6-4e7a-adbe-3ee3dc3fa090', title: 'PATENT_TITLE_5547' },
            { id: '13fd9057-2f75-48bc-9d3c-f1327c8a57c1', title: 'PATENT_TITLE_2518' },
            { id: 'fa41e548-b8bf-4b2b-b9be-d9fc1caf9fee', title: 'PATENT_TITLE_4622' },
            { id: 'c4a2c697-723f-4c95-a054-2696b9518e8d', title: 'PATENT_TITLE_1975' },
            { id: '5dd06d47-8086-4121-8032-ca42d0b38bb3', title: 'PATENT_TITLE_9031' },
        ]}
    />
)

export default App