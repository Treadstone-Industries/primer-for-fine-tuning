import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '298aa441-d93d-410a-8eab-082a2dce9860', title: 'PATENT_TITLE_9740' },
        { id: '69661fcb-2663-4971-8490-4603e195f0b3', title: 'PATENT_TITLE_6822' },
        { id: '2751f5a5-ef77-483d-a339-c145e04ae6d5', title: 'PATENT_TITLE_8428' },
        { id: '8712ab11-1e30-4862-bf53-9a5df5e97313', title: 'PATENT_TITLE_9759' },
        { id: '37bc1a68-cb75-48b2-9827-9c612e509ab2', title: 'PATENT_TITLE_5365' },
        { id: '0f800b17-effe-440c-9052-fe52a25d881f', title: 'PATENT_TITLE_8668' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App