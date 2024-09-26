import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6c0edf4d-36a3-40aa-841a-179848218c91', title: 'PATENT_TITLE_5280' },
            { id: '9592bf15-572f-4ad9-bb91-397e11bae6f0', title: 'PATENT_TITLE_5228' },
        ]}
    />
)

export default App