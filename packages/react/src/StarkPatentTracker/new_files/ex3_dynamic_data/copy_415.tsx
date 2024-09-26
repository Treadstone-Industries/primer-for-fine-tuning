import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c6707c87-98ac-4536-9c71-032d518ffdb6', title: 'PATENT_TITLE_9653' },
        { id: 'effed18f-7fdb-4d0f-ac35-2a850d619de4', title: 'PATENT_TITLE_8540' },
        { id: '40ff28ad-0406-4f89-ad91-6ecb8bee746e', title: 'PATENT_TITLE_6022' },
        { id: 'f749c953-c7a4-4057-bab3-968074859a26', title: 'PATENT_TITLE_6335' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App