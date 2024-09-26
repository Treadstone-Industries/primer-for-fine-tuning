import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '13849f5c-e35b-44b3-a3fb-76b2e192ecab', title: 'PATENT_TITLE_6705' },
        { id: '85f6d775-dcaf-48be-a891-afa07b11ac57', title: 'PATENT_TITLE_4229' },
        { id: 'd287fd9d-2258-40d7-85c5-aa9f6ebe5b47', title: 'PATENT_TITLE_6480' },
        { id: '673859f0-71d0-4978-bed1-8f931f98b44d', title: 'PATENT_TITLE_1494' },
        { id: '77b7f8e4-51c0-40e9-b8b9-4f60a269151e', title: 'PATENT_TITLE_7246' },
        { id: 'a2900d97-ce58-457c-ba98-b865fa094874', title: 'PATENT_TITLE_9501' },
        { id: '8ae85ddb-9725-4c86-8598-e5bb8a0de87e', title: 'PATENT_TITLE_7573' },
        { id: 'fdf8a0b0-0535-45fb-b4b0-0ece199f322e', title: 'PATENT_TITLE_5766' },
        { id: '5cceead7-f5ba-432d-9bca-65fbc4665b8a', title: 'PATENT_TITLE_1144' },
        { id: 'b94811b5-16ad-4180-9063-983a6f296731', title: 'PATENT_TITLE_3120' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App