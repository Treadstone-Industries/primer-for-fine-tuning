import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c12936db-c38d-4350-92fe-c5f862abcaae', title: 'PATENT_TITLE_7172' },
        { id: '4f4365a3-10b1-410e-8d92-51bcaf30e63e', title: 'PATENT_TITLE_5210' },
        { id: 'd2c1fee9-d613-42e3-8d84-5f4a7000e336', title: 'PATENT_TITLE_9691' },
        { id: '764eab8a-5627-415a-84cd-fda65383d62b', title: 'PATENT_TITLE_8606' },
        { id: 'ccb3006d-6ce2-45cc-bddf-71f57ef7c595', title: 'PATENT_TITLE_6768' },
        { id: '2e15cd1e-ef79-4586-95fd-51031da329ec', title: 'PATENT_TITLE_2298' },
        { id: '0adcc963-c071-4e30-b71b-f44f357c7498', title: 'PATENT_TITLE_1309' },
        { id: 'd5e5b0f9-04fb-4a9f-91b0-faa2875fb7f9', title: 'PATENT_TITLE_8110' },
        { id: '9f9eaa1c-e883-4b41-a757-365f132d6350', title: 'PATENT_TITLE_9646' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App