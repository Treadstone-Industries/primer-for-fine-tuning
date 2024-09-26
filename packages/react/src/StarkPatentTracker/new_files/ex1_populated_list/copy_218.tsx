import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '96544d72-ce88-415b-b021-5b949dd62f8a', title: 'PATENT_TITLE_8705' },
            { id: '59a75954-4bcd-453b-8748-4fbcbe89f4cd', title: 'PATENT_TITLE_6433' },
            { id: 'c14cc41a-a7e0-4021-a3bd-a6d210f0b037', title: 'PATENT_TITLE_8067' },
        ]}
    />
)

export default App