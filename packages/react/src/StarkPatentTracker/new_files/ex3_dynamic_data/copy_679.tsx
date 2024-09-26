import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'edeca136-b654-4b62-acc3-5f5fdc27ed75', title: 'PATENT_TITLE_7116' },
        { id: '37d4120d-f278-4705-bbcb-b33b3eadfb33', title: 'PATENT_TITLE_9354' },
        { id: '35fb2684-2fcd-469e-b451-e894f42d48eb', title: 'PATENT_TITLE_9043' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App