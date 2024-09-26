import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd22dbe76-291d-4da0-90f2-151531316e40', title: 'PATENT_TITLE_7791' },
        { id: 'd76c5607-5f8a-4e9d-9645-4e56871f689f', title: 'PATENT_TITLE_8298' },
        { id: 'bb015d27-0c82-4f6d-b7e3-e5dbdff17c16', title: 'PATENT_TITLE_7121' },
        { id: 'e29fb404-5b80-4e83-9cc2-963960c421a7', title: 'PATENT_TITLE_3692' },
        { id: '7da00cc4-1dbc-4061-9c95-e4beda50c685', title: 'PATENT_TITLE_6473' },
        { id: '2dd6cd84-bc00-4387-8bda-d9579b0377b4', title: 'PATENT_TITLE_8672' },
        { id: '21a73562-31c4-4e93-8158-c43118c0fd1d', title: 'PATENT_TITLE_3387' },
        { id: 'f5d1801a-1f4d-45f2-8baa-bbd4da3f6089', title: 'PATENT_TITLE_1462' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App