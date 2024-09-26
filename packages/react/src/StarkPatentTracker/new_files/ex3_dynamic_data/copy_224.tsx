import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '88a0aa83-d22a-468b-b95b-979f5c9825c3', title: 'PATENT_TITLE_3129' },
        { id: 'a09067ea-b80f-4125-afae-4a6b74f1cce1', title: 'PATENT_TITLE_7419' },
        { id: 'ae9c7e1e-dc12-498a-b0fe-f39a3c115eef', title: 'PATENT_TITLE_4383' },
        { id: '7b77cc99-3019-4c0f-a6a7-b468a0cd3cbd', title: 'PATENT_TITLE_6598' },
        { id: '1892a867-dd16-4a13-9e92-e735f54e8879', title: 'PATENT_TITLE_6211' },
        { id: 'd1dec569-5d62-4bd7-850b-703754f42af6', title: 'PATENT_TITLE_6358' },
        { id: '1a316ada-6adb-475f-b5cf-e40a44548136', title: 'PATENT_TITLE_4049' },
        { id: 'c286ce19-aa0d-4c8a-a4a1-43bce3dfda10', title: 'PATENT_TITLE_2855' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App