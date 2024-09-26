import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7564d80c-af9f-4d39-9987-e658da01572b', title: 'PATENT_TITLE_8988' },
        { id: '9a8c0083-dd59-4bab-8338-42c060b25257', title: 'PATENT_TITLE_8380' },
        { id: 'e17cd465-00c7-4828-b610-29e829f3bec6', title: 'PATENT_TITLE_7705' },
        { id: 'f2872f60-bde5-46fa-ba7c-9b21f56e5267', title: 'PATENT_TITLE_8035' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App