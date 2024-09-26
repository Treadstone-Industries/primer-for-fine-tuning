import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e2c7e6ac-61c7-4fd4-a3d2-a6d5e12858e0', title: 'PATENT_TITLE_8007' },
        { id: '785a6e54-4f61-4892-9238-93cdbaa91fe4', title: 'PATENT_TITLE_9654' },
        { id: '4d5425d7-4180-4efb-96f2-592b756ec2a6', title: 'PATENT_TITLE_5959' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App