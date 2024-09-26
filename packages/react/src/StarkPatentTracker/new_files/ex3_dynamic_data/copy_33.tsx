import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9aff7462-6c45-4e95-a78c-e898cf0c4950', title: 'PATENT_TITLE_9347' },
        { id: 'e9638a48-487a-43b0-863f-689d91e7b797', title: 'PATENT_TITLE_6129' },
        { id: 'a95250f1-b673-4a65-8be4-03611c586e4c', title: 'PATENT_TITLE_4620' },
        { id: 'b2f9329d-ce8c-4f14-8532-f6f9570ca7f3', title: 'PATENT_TITLE_4220' },
        { id: '8fba4471-804c-4955-a61a-80489cc69eb1', title: 'PATENT_TITLE_4638' },
        { id: '6d9ee0da-a99b-461f-81a3-8bb5060950f6', title: 'PATENT_TITLE_4514' },
        { id: '401041e2-e231-4a8e-9283-2fdbe31b5ebd', title: 'PATENT_TITLE_9602' },
        { id: '46d96bcd-2ee7-4d1a-8960-44e714f2e202', title: 'PATENT_TITLE_9793' },
        { id: '86f6c5ba-77a6-49b8-bc84-845b41fa8dc6', title: 'PATENT_TITLE_1814' },
        { id: 'e50c530a-8fe8-46cc-a22d-0c1e7d8213d1', title: 'PATENT_TITLE_2681' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App