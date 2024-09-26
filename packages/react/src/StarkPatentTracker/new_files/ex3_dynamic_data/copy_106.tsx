import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9cbfc185-cd74-4294-b4c9-c89c37f8d1f1', title: 'PATENT_TITLE_4281' },
        { id: 'f1190816-950c-4f5d-b829-58d5c6bd6f91', title: 'PATENT_TITLE_1070' },
        { id: 'b4e6783c-b26d-4912-8630-2b96a7a8e71b', title: 'PATENT_TITLE_9090' },
        { id: '9ae9978c-1b58-4414-806d-36c1fad10060', title: 'PATENT_TITLE_5055' },
        { id: '94d264c9-a41e-47d6-bd29-fc68d35210e4', title: 'PATENT_TITLE_1004' },
        { id: '9bf27e12-f937-4523-a316-9653f6381639', title: 'PATENT_TITLE_5835' },
        { id: '9afa3d82-9575-4f5a-b704-d30eb553aa5d', title: 'PATENT_TITLE_1663' },
        { id: '92e82d8f-0dfc-4401-b437-1bfbe272e878', title: 'PATENT_TITLE_5997' },
        { id: '824875e2-12cd-4de3-ac8f-c224c60351d3', title: 'PATENT_TITLE_1142' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App