import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0f15ccad-2dfa-4ed9-b482-42f86fc5cbd2', title: 'PATENT_TITLE_7730' },
        { id: '5f37b1ce-c586-4d8f-a625-6115eba21a54', title: 'PATENT_TITLE_3429' },
        { id: 'b768992b-0aaa-4e46-9c5b-e3f30ba19c2b', title: 'PATENT_TITLE_8374' },
        { id: '6c1e4faa-e398-414d-98c4-307b97c5a897', title: 'PATENT_TITLE_3456' },
        { id: '50250ac6-d719-4765-9ec8-9ea60f5a037a', title: 'PATENT_TITLE_7262' },
        { id: 'e53aa5ed-0b99-47cf-bdc1-b3049e32be7b', title: 'PATENT_TITLE_5775' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App