import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd0cc1382-3737-436f-9e82-dcac9bf633a6', title: 'PATENT_TITLE_3326' },
            { id: '282bc5fb-9603-4e79-902b-3add17d2a832', title: 'PATENT_TITLE_3299' },
            { id: 'f8791a0e-0e5f-4a18-ac26-ad676992f3cc', title: 'PATENT_TITLE_7359' },
            { id: '781921a4-19c5-4702-ba2e-9fb869f71c57', title: 'PATENT_TITLE_5794' },
            { id: '14dd4b64-a4b6-4a5d-97e1-691eb1063654', title: 'PATENT_TITLE_9100' },
            { id: '17ac2878-6d4e-4319-bf9d-a8b3918f9c10', title: 'PATENT_TITLE_2165' },
        ]}
    />
)

export default App