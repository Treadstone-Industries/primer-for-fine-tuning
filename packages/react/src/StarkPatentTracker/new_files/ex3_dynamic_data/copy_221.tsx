import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '378c4859-1780-4de9-b7d9-ec253bee889c', title: 'PATENT_TITLE_4651' },
        { id: 'bcb860fb-5407-46cd-ad8d-ea087ba68625', title: 'PATENT_TITLE_8930' },
        { id: 'e081f660-343b-4024-9670-c47f2ae70b9f', title: 'PATENT_TITLE_9007' },
        { id: 'de3c80bc-214b-466a-abee-e61a4e3b8034', title: 'PATENT_TITLE_4873' },
        { id: 'f3a01ee9-c4bc-4bf1-9272-17a1883265b7', title: 'PATENT_TITLE_2907' },
        { id: '47f50a9d-3d1f-4399-85a2-7974b15cc4b9', title: 'PATENT_TITLE_3227' },
        { id: '1f8a2452-04c7-4de0-a083-fbf28ec32b48', title: 'PATENT_TITLE_4963' },
        { id: 'a5b45ac1-47c0-4367-b28b-bafa9c71556f', title: 'PATENT_TITLE_2301' },
        { id: '2a9cdf99-1188-4513-9baa-37fb84b6d739', title: 'PATENT_TITLE_8904' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App