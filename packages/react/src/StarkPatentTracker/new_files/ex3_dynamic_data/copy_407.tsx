import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '71a823a5-95a2-4475-9eb5-0b089e7367b0', title: 'PATENT_TITLE_8461' },
        { id: 'db85b828-581e-4a2b-ae0c-a93975418e40', title: 'PATENT_TITLE_2976' },
        { id: '75e88018-77fc-45d4-b245-fa03d4092e3e', title: 'PATENT_TITLE_1960' },
        { id: '60e5da41-06ad-4698-b797-ae5731036435', title: 'PATENT_TITLE_5509' },
        { id: 'e8503f71-68aa-4006-81df-f1e5494761aa', title: 'PATENT_TITLE_9294' },
        { id: '83097733-c5d9-49b1-9c34-c6d41640d1bb', title: 'PATENT_TITLE_6718' },
        { id: '86eb2e8f-4afc-45b8-8ba7-94cd768b6a11', title: 'PATENT_TITLE_8670' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App