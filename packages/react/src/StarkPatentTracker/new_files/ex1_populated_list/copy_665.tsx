import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f15c98a7-e165-40ef-8ff6-d573286241c3', title: 'PATENT_TITLE_9568' },
            { id: 'aee8560f-8b59-434d-8156-ace9b676d21d', title: 'PATENT_TITLE_5031' },
            { id: '0c5911bc-c6a1-4f7f-b28a-c558be796096', title: 'PATENT_TITLE_3075' },
        ]}
    />
)

export default App