import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7c5f67bc-03e1-45f3-96f3-76860b9bfd32', title: 'PATENT_TITLE_6905' },
        { id: 'cbff821a-7a62-46d7-bdf7-f96977be1d15', title: 'PATENT_TITLE_2945' },
        { id: '49f1c57d-e618-4f6e-abda-934ff8b80851', title: 'PATENT_TITLE_7274' },
        { id: 'c57a23a0-30be-4b28-879f-eded83b81c9f', title: 'PATENT_TITLE_9970' },
        { id: '3115caa3-1bed-4eef-b4d3-b1d509909534', title: 'PATENT_TITLE_7161' },
        { id: 'e1f24cb6-5ae5-48b9-a6bd-b0488289e1f9', title: 'PATENT_TITLE_8833' },
        { id: '90585654-df65-4b91-af76-c3f4f6354ae5', title: 'PATENT_TITLE_8495' },
        { id: '928fdc20-59f2-40bd-b81d-c7b3d188dfb5', title: 'PATENT_TITLE_9912' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App