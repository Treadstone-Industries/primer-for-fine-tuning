import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1f5c8c55-b13f-4513-9933-789a70589045', title: 'PATENT_TITLE_4872' },
            { id: '5b3e69e6-5085-490e-b635-4080672eae2a', title: 'PATENT_TITLE_9024' },
            { id: 'c0ed7558-5d73-4435-8dcf-10d069bf03d3', title: 'PATENT_TITLE_8719' },
            { id: '91a640d8-cab1-4046-84f2-dc430b5550c3', title: 'PATENT_TITLE_6606' },
        ]}
    />
)

export default App