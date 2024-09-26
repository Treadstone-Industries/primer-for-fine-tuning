import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fcaa52ce-8b2c-46a2-95c2-54e3bec0711f', title: 'PATENT_TITLE_3784' },
        { id: '96bc60e5-3408-484a-ad3d-48697d4908a1', title: 'PATENT_TITLE_1287' },
        { id: '52aaadb6-0752-4ba2-84d6-7dd90959dc00', title: 'PATENT_TITLE_6597' },
        { id: '70e5c519-2a77-47f8-935a-f0a0d66c48c0', title: 'PATENT_TITLE_7466' },
        { id: '55e2e290-e8b9-4d62-a609-b8c6b8e176a7', title: 'PATENT_TITLE_9019' },
        { id: 'fbd5179d-97f2-43cc-8be6-349b50e00e14', title: 'PATENT_TITLE_2900' },
        { id: '0fd371d8-517a-4ccb-86a3-bfaf38285982', title: 'PATENT_TITLE_4200' },
        { id: '44380d46-3c8b-4d8c-b55a-8246fcdc8b4d', title: 'PATENT_TITLE_9732' },
        { id: 'a3b304ce-5317-4cc6-91fb-cbb795682b97', title: 'PATENT_TITLE_5636' },
        { id: '0dc74609-8905-4179-a6ae-d3d9922f179a', title: 'PATENT_TITLE_6200' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App