import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fcdc0def-e7a2-4115-930c-93feeb4b556d', title: 'PATENT_TITLE_7502' },
            { id: 'b918b255-4f4f-4691-9624-688953ffd509', title: 'PATENT_TITLE_5260' },
            { id: 'b70e6c1c-7341-49cc-b326-1c58aa3e4033', title: 'PATENT_TITLE_9480' },
        ]}
    />
)

export default App