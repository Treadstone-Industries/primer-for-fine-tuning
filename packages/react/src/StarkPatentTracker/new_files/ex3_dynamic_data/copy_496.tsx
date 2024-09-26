import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b6054f54-fe20-4f0a-be1e-b9aefc48fce4', title: 'PATENT_TITLE_5862' },
        { id: 'af602ebf-06a7-43cd-a696-57c11aab8cd8', title: 'PATENT_TITLE_8337' },
        { id: 'f3db98ea-b2a9-4555-987d-7a7aaea28fce', title: 'PATENT_TITLE_6233' },
        { id: 'b2182772-dee7-470f-abde-26655c4cd20f', title: 'PATENT_TITLE_5691' },
        { id: '8711c244-f5c5-4408-9d09-2e974b3ed8c6', title: 'PATENT_TITLE_2057' },
        { id: '60990548-7e0e-4ba7-9163-bdd5f1f4c98c', title: 'PATENT_TITLE_9553' },
        { id: '5327560a-f6ec-4f6b-8b9b-1f95ac390cf8', title: 'PATENT_TITLE_5596' },
        { id: 'a23248af-1a28-4d3b-8298-02e8aebb251d', title: 'PATENT_TITLE_1085' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App