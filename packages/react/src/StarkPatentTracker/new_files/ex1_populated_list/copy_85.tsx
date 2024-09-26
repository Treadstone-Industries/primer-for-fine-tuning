import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9f8b58b0-d06d-4c9a-9d30-7788b1b2e0df', title: 'PATENT_TITLE_5563' },
            { id: '0688b0fc-2654-4a0f-94f4-9fb356e18b75', title: 'PATENT_TITLE_6887' },
            { id: '08d39dc0-47af-4d9b-83b4-431b9a6545fe', title: 'PATENT_TITLE_1154' },
            { id: 'cc63c9a1-a68c-4c7a-9d24-410ec2dcb7b3', title: 'PATENT_TITLE_4410' },
        ]}
    />
)

export default App