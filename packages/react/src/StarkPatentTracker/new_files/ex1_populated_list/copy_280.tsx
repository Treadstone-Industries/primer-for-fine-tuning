import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a3372c51-9512-49a2-8e1b-04eca2ca53d1', title: 'PATENT_TITLE_3165' },
            { id: 'b9af9f4b-c0f8-4557-9641-15eecb31688c', title: 'PATENT_TITLE_6061' },
        ]}
    />
)

export default App