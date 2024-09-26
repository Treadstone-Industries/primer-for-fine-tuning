import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '428cec28-2afb-428e-9e92-e06888595e85', title: 'PATENT_TITLE_5478' },
        { id: 'cf7edad9-bdb6-42cf-9049-97594eb03099', title: 'PATENT_TITLE_2899' },
        { id: 'b4a6f22b-70cf-4d7b-9c94-3e44e1dd84c1', title: 'PATENT_TITLE_1795' },
        { id: '7b7e439d-ae78-4bf2-b9c7-6343ed38ccf1', title: 'PATENT_TITLE_8662' },
        { id: 'c3753a3e-ce36-49b8-847f-44ef4584b433', title: 'PATENT_TITLE_9054' },
        { id: '60c4ecab-fc41-4aee-ab9e-b6c43e466b6f', title: 'PATENT_TITLE_8596' },
        { id: 'adb1410c-f49e-4e39-991f-f3f4575945e3', title: 'PATENT_TITLE_9018' },
        { id: 'fe31e209-d146-45e7-9e25-f3cc3790b8af', title: 'PATENT_TITLE_4968' },
        { id: '3971b3cf-6487-414c-82d6-5cd54bb16088', title: 'PATENT_TITLE_9512' },
        { id: '3122d253-f517-46e4-b842-de5874b2fd4a', title: 'PATENT_TITLE_8314' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App