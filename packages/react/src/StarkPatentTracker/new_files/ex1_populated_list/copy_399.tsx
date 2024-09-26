import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a309a434-cb5c-4261-bf0c-146e1e6612bc', title: 'PATENT_TITLE_1286' },
            { id: '54b37323-bc9d-4ff6-9d9b-3c8cfeb96eb8', title: 'PATENT_TITLE_8579' },
            { id: '6cbaf099-d225-4629-a494-66b3b9454010', title: 'PATENT_TITLE_4417' },
            { id: '906c1cb7-6ed1-4a13-8447-fdbed8820c36', title: 'PATENT_TITLE_1704' },
        ]}
    />
)

export default App