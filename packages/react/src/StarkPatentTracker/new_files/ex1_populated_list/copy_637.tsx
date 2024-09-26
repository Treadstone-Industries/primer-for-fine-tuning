import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a2afbb8a-fb1d-4997-b22c-0434b5340c18', title: 'PATENT_TITLE_5205' },
            { id: '73698baa-1d9b-4a29-a4bc-c67b7b1e830d', title: 'PATENT_TITLE_7533' },
            { id: '41c414dc-58b7-40b8-bf8e-804b8851028a', title: 'PATENT_TITLE_6857' },
            { id: '6dc9ef74-036b-4da2-b1ba-40059efdec9f', title: 'PATENT_TITLE_1544' },
        ]}
    />
)

export default App