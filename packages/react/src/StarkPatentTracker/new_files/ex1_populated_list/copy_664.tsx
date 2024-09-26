import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2f91b1e4-6ea6-420c-b847-11704b2ab118', title: 'PATENT_TITLE_4307' },
            { id: '59e381d1-1606-4a84-9f11-830c5d52c84c', title: 'PATENT_TITLE_7417' },
            { id: '900ade79-0fa6-4320-8398-a40067e3a410', title: 'PATENT_TITLE_3390' },
            { id: 'a9695302-9245-481f-9b5f-f3483e2260d3', title: 'PATENT_TITLE_5136' },
        ]}
    />
)

export default App