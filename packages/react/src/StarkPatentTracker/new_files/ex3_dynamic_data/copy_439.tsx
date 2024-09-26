import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'babebf2a-b4fa-4e61-aed3-709cdc22c18d', title: 'PATENT_TITLE_6936' },
        { id: '20690e5c-d35e-42cc-a448-f1ffa990b2ba', title: 'PATENT_TITLE_1545' },
        { id: '0f4a733a-d2ef-483d-8f8e-3ec0e3c8a8fa', title: 'PATENT_TITLE_9291' },
        { id: 'd070595a-dd55-44b2-aa0c-1f9efc67dedb', title: 'PATENT_TITLE_8326' },
        { id: 'cc788f63-d668-4606-b082-de37c181efa1', title: 'PATENT_TITLE_6821' },
        { id: '30e44043-3512-4792-b95e-93f05184d764', title: 'PATENT_TITLE_6855' },
        { id: 'f6d5aa27-dd93-401e-95f8-28ec7ca02ced', title: 'PATENT_TITLE_3608' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App