import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5c3cb9fb-69ec-4f7b-873c-0faae4f43b94', title: 'PATENT_TITLE_4360' },
            { id: '20997e03-486b-4791-b2b5-b7e3154e1d65', title: 'PATENT_TITLE_2382' },
        ]}
    />
)

export default App