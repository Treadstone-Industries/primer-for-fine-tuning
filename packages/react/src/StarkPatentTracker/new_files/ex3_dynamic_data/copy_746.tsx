import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e2f42ab8-372a-4836-a2dd-c7f546188d87', title: 'PATENT_TITLE_1064' },
        { id: 'fecbcb4f-7615-44cf-abdf-caae2b54432d', title: 'PATENT_TITLE_5058' },
        { id: 'e33ddadb-3f13-4008-8ef6-e86e20c019f1', title: 'PATENT_TITLE_9516' },
        { id: '4fca4b95-ddbb-4a52-80c8-f173d0dc27e5', title: 'PATENT_TITLE_8840' },
        { id: '2447a6f9-3bbd-4874-9928-6df12770db4e', title: 'PATENT_TITLE_1863' },
        { id: 'f5352f46-b84f-4728-ac3f-68021c2a451c', title: 'PATENT_TITLE_6618' },
        { id: 'aad19417-4bfd-4733-be9d-25f914fe7f56', title: 'PATENT_TITLE_6654' },
        { id: '862a858f-6315-455e-a28a-31b339ae0bf1', title: 'PATENT_TITLE_4094' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App