import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '48ded9bd-d035-4b86-9f87-f5b5851da873', title: 'PATENT_TITLE_8789' },
            { id: 'aa26669e-4ac5-4681-bccb-729bd28f0e69', title: 'PATENT_TITLE_8654' },
            { id: 'a755c195-d922-4116-9e5c-5fd9437ed1ba', title: 'PATENT_TITLE_8071' },
        ]}
    />
)

export default App