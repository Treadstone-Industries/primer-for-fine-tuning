import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'eeb2de90-8ece-4f2e-848f-764a5e1d2107', title: 'PATENT_TITLE_7110' },
        { id: '2a1c71e7-2226-49c7-9cc6-2d9038fb3590', title: 'PATENT_TITLE_1639' },
        { id: '6a58b312-01f5-4319-b20e-d256654bd835', title: 'PATENT_TITLE_2655' },
        { id: 'f9085526-4d25-4b06-a6e1-8f39d1549de6', title: 'PATENT_TITLE_4777' },
        { id: '93a504fb-aa14-475e-babf-484196540884', title: 'PATENT_TITLE_3526' },
        { id: '0b40f02d-7954-4004-9c10-9fdd34c1b177', title: 'PATENT_TITLE_7643' },
        { id: 'fc8e7213-36cf-4255-909e-7bc2429adf2a', title: 'PATENT_TITLE_4739' },
        { id: 'd553a0b3-b0f6-4cd1-9561-b605b02db0f1', title: 'PATENT_TITLE_9874' },
        { id: '8fbf5567-cc62-4dfd-bd41-62d855425bde', title: 'PATENT_TITLE_5800' },
        { id: '80c8ff51-c62e-4aa5-9b50-1964bb81c003', title: 'PATENT_TITLE_8341' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App