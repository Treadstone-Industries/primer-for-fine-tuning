import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ba3afb93-09ac-40b7-b604-44f414082765', title: 'PATENT_TITLE_5666' },
        { id: 'ac096879-ecf4-4ea2-b471-630873dfdc5e', title: 'PATENT_TITLE_1306' },
        { id: '99b6832e-f732-4bd6-8fe4-edb98ed4b8a5', title: 'PATENT_TITLE_1064' },
        { id: '80fa080a-8733-41d6-9f19-3fcab2e36be5', title: 'PATENT_TITLE_5064' },
        { id: '15a97d4d-df1f-4e80-8d75-7cca58a6c7d1', title: 'PATENT_TITLE_8841' },
        { id: 'f410f143-5276-4a1b-9dca-4dfee9f379bb', title: 'PATENT_TITLE_6305' },
        { id: '98bdf5b9-3afe-463a-9c78-ae6fce71d46a', title: 'PATENT_TITLE_8956' },
        { id: '2ccb555c-6d0b-462c-bc78-231671605e79', title: 'PATENT_TITLE_3938' },
        { id: '98a078c6-ecd8-4519-9a32-1c40d0a0a728', title: 'PATENT_TITLE_4757' },
        { id: '7472fc05-b129-4be2-af91-84c5c45b02b5', title: 'PATENT_TITLE_6242' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App