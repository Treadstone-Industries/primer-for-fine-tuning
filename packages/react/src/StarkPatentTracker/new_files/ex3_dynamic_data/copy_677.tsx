import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0fa43c09-2aa3-4d76-9c63-1d9b09f3a78b', title: 'PATENT_TITLE_3712' },
        { id: '5b0cd5b5-7231-4772-ab67-de5ea829322e', title: 'PATENT_TITLE_6125' },
        { id: '8e762374-3309-45d3-8557-6dda726f8955', title: 'PATENT_TITLE_2814' },
        { id: 'cd876eec-a92f-413a-b638-8f3e51ab6a15', title: 'PATENT_TITLE_6323' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App