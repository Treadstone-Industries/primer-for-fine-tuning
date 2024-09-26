import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '446801b7-1e70-4729-9ffd-61af1925da20', title: 'PATENT_TITLE_9097' },
            { id: '8901e986-30b6-4a02-ab24-5f5ff75f2a3a', title: 'PATENT_TITLE_5134' },
            { id: '015944e5-7f2b-4af0-98e7-65cbb291750c', title: 'PATENT_TITLE_5353' },
            { id: '7cb02ebd-c894-4fd5-a1f6-7264249d38d8', title: 'PATENT_TITLE_4849' },
            { id: '8f7fa6dd-f498-43f9-912e-bd54baf87ae6', title: 'PATENT_TITLE_2475' },
            { id: '6aacf17e-d23e-441e-9087-7805141de0c2', title: 'PATENT_TITLE_7635' },
        ]}
    />
)

export default App