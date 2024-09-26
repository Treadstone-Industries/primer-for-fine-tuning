import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c007b199-86d6-4d9b-962b-26c7cde1470e', title: 'PATENT_TITLE_2447' },
            { id: 'adaae956-8a4c-4233-969b-3dcd0343a80f', title: 'PATENT_TITLE_8729' },
            { id: '5611fe0f-b48a-4319-8ce8-619be57a54cd', title: 'PATENT_TITLE_7784' },
            { id: '60fa687b-f7b2-4bb1-a205-6c5dccbad537', title: 'PATENT_TITLE_8324' },
        ]}
    />
)

export default App