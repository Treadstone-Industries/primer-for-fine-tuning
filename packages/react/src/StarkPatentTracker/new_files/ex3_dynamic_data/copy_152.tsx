import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '29e02d8e-9555-4d13-814a-417d1acc188d', title: 'PATENT_TITLE_6251' },
        { id: '78660bef-dd72-41b3-ad3e-cfc29a97405a', title: 'PATENT_TITLE_7317' },
        { id: 'e555456b-aba7-4988-bd62-a862be2f9329', title: 'PATENT_TITLE_5397' },
        { id: 'e1af5233-8a23-405d-aa4d-523e6539ddcb', title: 'PATENT_TITLE_3352' },
        { id: '33925a42-7d59-4bb1-bb9d-c601286c2abd', title: 'PATENT_TITLE_2969' },
        { id: '04303d11-b1c2-413f-a8da-74fda08f15b9', title: 'PATENT_TITLE_3236' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App