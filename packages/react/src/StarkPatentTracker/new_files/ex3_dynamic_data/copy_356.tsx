import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '91ddabe8-c620-4d46-bb7c-eec34d44d554', title: 'PATENT_TITLE_8160' },
        { id: 'd2d82ea9-fc73-40c6-8acd-62f55fd1cf3d', title: 'PATENT_TITLE_7509' },
        { id: 'c7572d51-3d6b-4c1e-a345-3b41141c0755', title: 'PATENT_TITLE_4322' },
        { id: 'b5383c29-deaf-4db7-9a55-f3cc38470140', title: 'PATENT_TITLE_8476' },
        { id: '91cfa5f7-0a84-4a43-8969-0f25f1778d6c', title: 'PATENT_TITLE_3649' },
        { id: '5516bf79-b489-4c73-b881-ca5cf29450b1', title: 'PATENT_TITLE_7622' },
        { id: 'e3ca94c5-58f6-4fa2-88d1-902b0934feca', title: 'PATENT_TITLE_4909' },
        { id: '1151559b-945d-4217-8f5e-edbd02c76623', title: 'PATENT_TITLE_6509' },
        { id: 'd373f18b-ea9f-42eb-bf42-060e48557f75', title: 'PATENT_TITLE_2458' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App