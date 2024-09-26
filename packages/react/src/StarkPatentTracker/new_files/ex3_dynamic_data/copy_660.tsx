import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd93d0ea0-2a60-487e-b1c0-ef858860a5d8', title: 'PATENT_TITLE_6148' },
        { id: 'd1e253b5-a525-4768-809e-587d927ebafa', title: 'PATENT_TITLE_3323' },
        { id: '9e8c6157-b6a6-482c-9925-4d998a0e9924', title: 'PATENT_TITLE_8380' },
        { id: '31f723b3-5df4-4419-89b8-07283fcf57a5', title: 'PATENT_TITLE_1569' },
        { id: '3ef95ea1-c6ed-4b15-8851-c20a2e815cfc', title: 'PATENT_TITLE_8999' },
        { id: '58434b8a-0387-4f4e-8540-59bceb1e1393', title: 'PATENT_TITLE_2659' },
        { id: 'c9a405ec-3883-43a0-8254-2cc7854b888f', title: 'PATENT_TITLE_8250' },
        { id: 'd76703da-b97c-419f-8023-4ebf88ad3869', title: 'PATENT_TITLE_1523' },
        { id: '77e1c411-e428-470e-85be-b2243320813e', title: 'PATENT_TITLE_3804' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App