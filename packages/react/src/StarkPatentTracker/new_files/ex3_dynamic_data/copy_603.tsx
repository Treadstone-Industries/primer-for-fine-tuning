import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b8f24279-8245-4857-8dbc-b99b167864d4', title: 'PATENT_TITLE_7604' },
        { id: '7c095da1-1cc5-4248-84cc-8dc181000112', title: 'PATENT_TITLE_7926' },
        { id: '7bf24ef4-0119-486b-bd18-80239c20456f', title: 'PATENT_TITLE_8706' },
        { id: '41c22d5d-4720-4706-b67e-a669b1ca34f2', title: 'PATENT_TITLE_2927' },
        { id: '0fcdb1b8-4b3f-47a9-ac0f-ee63e149f2f0', title: 'PATENT_TITLE_3459' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App