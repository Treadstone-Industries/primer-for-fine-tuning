import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5296a5c3-6bb7-49d3-aeab-5634b887f17b', title: 'PATENT_TITLE_8213' },
        { id: '3c562565-19bb-49be-9d54-cb096818e45a', title: 'PATENT_TITLE_9966' },
        { id: '2c31224a-10a4-4925-bbdd-6b77a1983c2a', title: 'PATENT_TITLE_6018' },
        { id: '3f5ce487-3bed-471a-883b-9d5a862dd6f2', title: 'PATENT_TITLE_8580' },
        { id: '1be83fa4-5563-4f66-ae38-607663030756', title: 'PATENT_TITLE_4609' },
        { id: 'b4d8a2ba-9bbc-4ad8-a296-7c4ceb8b17d4', title: 'PATENT_TITLE_1272' },
        { id: '95f4a2e8-2ff8-437f-b563-647097e93aee', title: 'PATENT_TITLE_7712' },
        { id: '3e4ac084-e76d-44b6-8226-c5c68b4611f5', title: 'PATENT_TITLE_2617' },
        { id: 'f93cbd31-08de-4344-bb00-4918882ea7e9', title: 'PATENT_TITLE_5470' },
        { id: 'ff0caca9-e86f-41ac-8113-1bf843b849ed', title: 'PATENT_TITLE_2304' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App