import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6a52f193-09e3-44ac-8e47-0b8291312b61', title: 'PATENT_TITLE_4898' },
            { id: 'ba01806e-97bf-4710-b3e4-e708e2417f7f', title: 'PATENT_TITLE_1665' },
        ]}
    />
)

export default App