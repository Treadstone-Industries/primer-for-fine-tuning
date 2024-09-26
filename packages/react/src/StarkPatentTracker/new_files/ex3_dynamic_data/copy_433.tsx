import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e40e2c33-e7e4-4156-bced-0714798530f6', title: 'PATENT_TITLE_2742' },
        { id: '5c982939-5466-4de2-bb66-2b4e48561739', title: 'PATENT_TITLE_6802' },
        { id: '37764ed4-3720-4bed-a397-6ba3620487d6', title: 'PATENT_TITLE_9702' },
        { id: 'd260fb28-e7a5-4341-9c55-864b9be2001c', title: 'PATENT_TITLE_4097' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App