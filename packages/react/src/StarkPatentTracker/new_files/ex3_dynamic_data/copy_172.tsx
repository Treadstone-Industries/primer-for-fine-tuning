import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b8973043-fffb-46be-b8d0-8438b4f35c25', title: 'PATENT_TITLE_1020' },
        { id: 'c6bb09e4-3904-45b2-a127-83e75aa3c0cf', title: 'PATENT_TITLE_2134' },
        { id: '8f4ebbfe-dd6e-46f3-b7d2-58791e0f5e3d', title: 'PATENT_TITLE_4985' },
        { id: '0c39e5d0-ad4d-4569-8ef3-7e60bc420303', title: 'PATENT_TITLE_3478' },
        { id: 'd27034a1-cf41-4717-9071-314a7ad44f13', title: 'PATENT_TITLE_8532' },
        { id: 'fceec195-15d5-4d8b-885c-e3eeb08a3ef8', title: 'PATENT_TITLE_5744' },
        { id: 'd831e360-7385-486a-9db1-6592f720ce6b', title: 'PATENT_TITLE_4334' },
        { id: '2ab67a0e-e3c3-44e4-be17-f78d588ad11e', title: 'PATENT_TITLE_2969' },
        { id: '0e5e146b-7b28-4912-bd3a-57b758c2f198', title: 'PATENT_TITLE_8753' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App