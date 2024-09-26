import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '569b716c-cbac-47e6-8089-0f12886f03d6', title: 'PATENT_TITLE_4915' },
            { id: '09cb5bb8-b1e1-446a-ad0a-38b9153cec70', title: 'PATENT_TITLE_8950' },
        ]}
    />
)

export default App