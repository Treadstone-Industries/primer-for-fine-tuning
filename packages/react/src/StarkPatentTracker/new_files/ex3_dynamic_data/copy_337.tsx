import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b85706c7-983b-4d81-bd16-e3086464ef0f', title: 'PATENT_TITLE_8890' },
        { id: 'b2425902-953e-4210-aeb1-65240d450db7', title: 'PATENT_TITLE_7604' },
        { id: '3889bedb-0fe3-4e94-a403-ebb946a6a664', title: 'PATENT_TITLE_5484' },
        { id: 'd89e37cb-6ccc-40f8-982b-778163b15b22', title: 'PATENT_TITLE_2395' },
        { id: '4227198a-e092-4d51-932d-7d927e92ffe3', title: 'PATENT_TITLE_4734' },
        { id: 'c2c33e28-7838-4886-9c98-553a8fc61c76', title: 'PATENT_TITLE_4900' },
        { id: 'f7310018-e0b2-48a4-a185-c35ffea8f067', title: 'PATENT_TITLE_2188' },
        { id: '20c3c377-f842-4091-b7d8-8c439da3beab', title: 'PATENT_TITLE_5245' },
        { id: 'f0ab237f-042e-4974-9c55-af1ab506e6e8', title: 'PATENT_TITLE_9011' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App