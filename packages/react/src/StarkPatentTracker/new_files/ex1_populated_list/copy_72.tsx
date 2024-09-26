import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd290ee92-3a3c-4743-83f9-2c7aae146b62', title: 'PATENT_TITLE_3926' },
            { id: 'c9d93631-e3e1-43b9-ad1e-38c3fed13a65', title: 'PATENT_TITLE_8373' },
            { id: '95a0f959-1093-4ce5-96be-4cf974a27b77', title: 'PATENT_TITLE_4583' },
        ]}
    />
)

export default App