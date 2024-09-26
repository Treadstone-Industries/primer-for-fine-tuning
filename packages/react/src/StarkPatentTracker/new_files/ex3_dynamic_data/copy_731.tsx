import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ee6c48da-79aa-4260-919a-872900296298', title: 'PATENT_TITLE_2757' },
        { id: '33f84551-41ae-4a53-b3b4-5904bb17ee6e', title: 'PATENT_TITLE_7311' },
        { id: 'a4365a65-1278-4e0f-99c4-70801b267441', title: 'PATENT_TITLE_3559' },
        { id: 'ef7339ac-8c13-4267-bb00-47abe83f0868', title: 'PATENT_TITLE_1178' },
        { id: '0339f4f5-219c-4dc3-8182-845c242a7a4d', title: 'PATENT_TITLE_3053' },
        { id: 'd60cd2f6-fcdb-4cfa-8107-54670d8cd3f6', title: 'PATENT_TITLE_3401' },
        { id: 'ef0d6cc1-9c1d-4fd1-924a-82542ab3eaf7', title: 'PATENT_TITLE_8085' },
        { id: '4bc42204-0a0b-4812-9afa-e46eab0fb87f', title: 'PATENT_TITLE_6163' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App