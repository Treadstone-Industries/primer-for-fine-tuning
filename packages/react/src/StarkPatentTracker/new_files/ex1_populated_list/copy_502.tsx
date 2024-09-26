import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '546e8d4f-98fc-486b-b51b-8ff8d9c5f391', title: 'PATENT_TITLE_3784' },
            { id: '11d84894-2a5f-4f3d-8bda-8309b36a1303', title: 'PATENT_TITLE_5091' },
            { id: '74820267-4dbe-4f3f-ac3f-e957ee5f7edd', title: 'PATENT_TITLE_9193' },
            { id: '6977a925-d0ad-4e39-9c73-84f8b2f53e81', title: 'PATENT_TITLE_4484' },
        ]}
    />
)

export default App