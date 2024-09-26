import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '86967acb-2f46-4a6b-aa53-c276e575af1c', title: 'PATENT_TITLE_7204' },
            { id: '9e74c6e3-ee7e-46c7-89e8-354c62d5e4db', title: 'PATENT_TITLE_7067' },
        ]}
    />
)

export default App