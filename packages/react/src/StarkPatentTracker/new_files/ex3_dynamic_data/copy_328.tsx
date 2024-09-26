import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b21a7152-02b0-4a86-aa94-54a207203d1b', title: 'PATENT_TITLE_9728' },
        { id: '879754f4-18da-4bc2-9b5e-5b56c83e294a', title: 'PATENT_TITLE_2175' },
        { id: '80cc36cf-781b-4b08-b199-45aae88b4b6c', title: 'PATENT_TITLE_4364' },
        { id: 'de19d4d4-aa42-4d07-b5ed-7eeca415e9c5', title: 'PATENT_TITLE_8198' },
        { id: '723f7a58-a521-44a4-9c86-47a7277a6f45', title: 'PATENT_TITLE_2421' },
        { id: '8e58b5dc-b20a-40db-9c89-2b3c725816ef', title: 'PATENT_TITLE_1853' },
        { id: '404d0ebb-bdca-42db-b9f6-116b4ffd774f', title: 'PATENT_TITLE_8192' },
        { id: 'a9372aba-b38b-4e43-8b11-8ebd8397d04b', title: 'PATENT_TITLE_3160' },
        { id: '435b518a-d01c-46ee-8e4e-5c3d685cd5b7', title: 'PATENT_TITLE_5871' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App