import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '36b79f25-a843-43c5-a70e-2a37acbeaa34', title: 'PATENT_TITLE_8111' },
            { id: '95bb91ed-8125-4b33-a8de-00ac2f0e1ab6', title: 'PATENT_TITLE_8225' },
        ]}
    />
)

export default App