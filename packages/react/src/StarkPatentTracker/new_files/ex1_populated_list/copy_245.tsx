import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3a369d31-2c25-425a-8f5b-b6d9c48b21db', title: 'PATENT_TITLE_7776' },
            { id: '322320fa-1f89-41c5-8cea-48d7f1385d01', title: 'PATENT_TITLE_5231' },
        ]}
    />
)

export default App