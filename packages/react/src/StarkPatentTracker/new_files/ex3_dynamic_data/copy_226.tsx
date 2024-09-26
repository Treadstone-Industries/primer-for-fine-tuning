import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '81d3033d-9f8b-440c-bf81-0646972fb80c', title: 'PATENT_TITLE_1590' },
        { id: 'f3262c65-5a3c-4879-8dcf-4659dd42cc86', title: 'PATENT_TITLE_2822' },
        { id: '6741b510-8ef5-44f8-95fd-ac721781bcd4', title: 'PATENT_TITLE_4713' },
        { id: '7a489254-9a03-4dbb-90de-a51cb625ed07', title: 'PATENT_TITLE_6486' },
        { id: '1b8c7232-18d2-4f41-adf9-a04c8c9e99b3', title: 'PATENT_TITLE_6385' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App