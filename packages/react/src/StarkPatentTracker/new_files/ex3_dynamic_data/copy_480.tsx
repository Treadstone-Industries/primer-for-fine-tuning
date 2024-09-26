import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd503ca9f-f3df-4cb3-8e6b-11ccf99fcdb9', title: 'PATENT_TITLE_2202' },
        { id: '2f5f50f2-7346-4ca3-9fea-42ffdfdfdc6d', title: 'PATENT_TITLE_8083' },
        { id: '60bb6e1f-51d9-4009-a801-a1a641a1d92a', title: 'PATENT_TITLE_9647' },
        { id: 'a3f3a95e-8564-4282-91ff-f9676a93c50c', title: 'PATENT_TITLE_1918' },
        { id: '0cb35a3e-9f5c-46e7-a4b5-7326e219cf2e', title: 'PATENT_TITLE_7026' },
        { id: '7a905c7c-43d2-464a-b245-ba70a35805e1', title: 'PATENT_TITLE_7342' },
        { id: '32021398-74ed-47dc-ab1d-704d3cb50b45', title: 'PATENT_TITLE_1785' },
        { id: 'c512150c-ef8c-428e-9e47-522a0a97d3e6', title: 'PATENT_TITLE_7102' },
        { id: '1ae74fd4-e196-41e2-8a17-7fb76b89c836', title: 'PATENT_TITLE_4890' },
        { id: '312a01c5-0b27-4970-b827-ad09d60e873f', title: 'PATENT_TITLE_4171' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App