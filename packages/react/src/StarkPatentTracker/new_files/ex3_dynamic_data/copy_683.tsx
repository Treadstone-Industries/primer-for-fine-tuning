import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b582bb81-461f-4fe5-a892-d1d745ee7681', title: 'PATENT_TITLE_7531' },
        { id: '71d40f7d-ca07-4b36-a2f1-0442ae401b86', title: 'PATENT_TITLE_5406' },
        { id: '0b231961-a959-4d4e-8c5e-bb860256b0a6', title: 'PATENT_TITLE_1732' },
        { id: 'e25031d5-44e1-42ca-92db-d21711a88368', title: 'PATENT_TITLE_8911' },
        { id: '5e7b56ae-bcae-4904-9c52-88f8fad75332', title: 'PATENT_TITLE_9497' },
        { id: '2672b36a-a91e-4b18-9d8b-e97100a459d3', title: 'PATENT_TITLE_5544' },
        { id: 'd57585dc-fedd-4a1d-bd47-fdb00609037e', title: 'PATENT_TITLE_8013' },
        { id: 'f9d562e7-eb1f-4dac-9835-6a7d3f6ef9bb', title: 'PATENT_TITLE_7823' },
        { id: '77259ac9-0a66-4d96-8c6c-8d405e30eabf', title: 'PATENT_TITLE_2753' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App