import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a90d84fc-cd6f-430f-a2f3-00d628c41da6', title: 'PATENT_TITLE_3434' },
        { id: 'ab0a60d3-0438-4e5f-891c-a08c5f193e42', title: 'PATENT_TITLE_5544' },
        { id: 'a10dfe9f-31dc-40b6-ad82-04feff3693dc', title: 'PATENT_TITLE_8848' },
        { id: 'c5393e46-f7fb-4628-b9e1-f4fc34f7292b', title: 'PATENT_TITLE_7053' },
        { id: '45878876-60d2-4e56-a600-a580e5120bc4', title: 'PATENT_TITLE_9332' },
        { id: '1b12fe4a-fce1-482d-8750-d5bca3b8d0f6', title: 'PATENT_TITLE_2750' },
        { id: 'c797a691-dd6f-4cd2-bf37-a48d7a12ce98', title: 'PATENT_TITLE_8000' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App