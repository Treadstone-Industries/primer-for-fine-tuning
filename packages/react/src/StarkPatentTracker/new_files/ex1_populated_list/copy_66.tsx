import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7552e326-c93d-4468-b8f3-a9f9cd777fdd', title: 'PATENT_TITLE_7576' },
            { id: '401e42ae-8d70-429c-a089-09e59e216fb3', title: 'PATENT_TITLE_9348' },
            { id: 'f27493fc-987d-4cc8-b88f-e35e92b5bf2c', title: 'PATENT_TITLE_5354' },
        ]}
    />
)

export default App