import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7cb33514-7164-4fa7-94e7-cb6483e91d9a', title: 'PATENT_TITLE_1014' },
        { id: '2f2f4cd7-c2be-4594-ab85-859b2e607f8b', title: 'PATENT_TITLE_5244' },
        { id: 'c15a6eaf-f716-4f64-8628-e53a297d0604', title: 'PATENT_TITLE_3477' },
        { id: 'a6b28202-84c5-4aec-aac5-a0bb8bf04e29', title: 'PATENT_TITLE_7759' },
        { id: 'b8849fa7-bef0-4eec-b9f8-8bf9577e6b8c', title: 'PATENT_TITLE_6860' },
        { id: '3a529ebf-0c10-4625-b905-2d3da57a2b19', title: 'PATENT_TITLE_6638' },
        { id: '71b33bf3-dd2e-4c67-9417-101d90f73607', title: 'PATENT_TITLE_6677' },
        { id: 'c6280e3a-03f5-48ba-8b41-b004d6854326', title: 'PATENT_TITLE_9983' },
        { id: '88f1fb8e-063b-47d5-aecc-2ff5548e1524', title: 'PATENT_TITLE_9039' },
        { id: '97ddfda6-a4d4-43aa-9b37-83d24433ee0d', title: 'PATENT_TITLE_5067' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App