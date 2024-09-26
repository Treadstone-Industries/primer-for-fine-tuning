import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2876400f-1c99-40f2-8a11-9f0d3e67683b', title: 'PATENT_TITLE_1888' },
            { id: '7aee0acb-8c9c-4bd4-96d2-08bde5c8885b', title: 'PATENT_TITLE_3297' },
            { id: 'c71a63bc-7ee2-4ae3-bb91-75c827926631', title: 'PATENT_TITLE_1504' },
            { id: 'f35e0096-85c1-450d-8ad7-45d9d17b1b60', title: 'PATENT_TITLE_8655' },
            { id: '6ce59a3e-3167-4e2f-a6b2-79eb715d6720', title: 'PATENT_TITLE_6957' },
            { id: 'f9d11e49-37f8-4240-8b2e-fc09a64613b7', title: 'PATENT_TITLE_9894' },
        ]}
    />
)

export default App