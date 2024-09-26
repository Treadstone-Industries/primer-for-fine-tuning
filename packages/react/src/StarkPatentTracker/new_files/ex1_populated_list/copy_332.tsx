import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ed82b2b3-03f0-488a-9388-cc37aa3f2b62', title: 'PATENT_TITLE_2586' },
            { id: 'da5f3494-416f-4c86-9fab-47a1b9c72b14', title: 'PATENT_TITLE_4676' },
            { id: '89d727ed-1bb5-4a57-84dd-36ee3e9f3a30', title: 'PATENT_TITLE_2023' },
            { id: 'fb052fcf-4666-4831-9561-8cbc6c975bb6', title: 'PATENT_TITLE_9661' },
            { id: '291633f6-2d81-4d28-8fa5-8578c61ada21', title: 'PATENT_TITLE_4292' },
            { id: 'cc0534be-e634-4225-9064-b3eb0e220c8a', title: 'PATENT_TITLE_3572' },
            { id: '0e4493e0-2ad3-49c1-ae00-1041ca7301f5', title: 'PATENT_TITLE_4684' },
            { id: '61400766-89bc-4e03-8043-92f308f85429', title: 'PATENT_TITLE_8581' },
        ]}
    />
)

export default App