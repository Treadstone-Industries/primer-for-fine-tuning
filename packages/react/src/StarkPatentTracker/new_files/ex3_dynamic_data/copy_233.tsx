import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c7c9fea1-e690-4724-8af9-1f4685aedbd8', title: 'PATENT_TITLE_8445' },
        { id: '8547457e-c7a4-4981-ba6e-5c5924db0a7f', title: 'PATENT_TITLE_7855' },
        { id: '92ac65b1-0010-4df8-8817-b9442986b010', title: 'PATENT_TITLE_2044' },
        { id: '01868356-24c9-424c-a811-a364da0231d1', title: 'PATENT_TITLE_3290' },
        { id: 'f8785149-0996-466f-b12d-1fc135d8fbc7', title: 'PATENT_TITLE_4016' },
        { id: 'eaec493a-deba-4e2e-bbd5-008858f90c24', title: 'PATENT_TITLE_6300' },
        { id: '634b2918-327a-4e0e-9a9d-442cccf285e0', title: 'PATENT_TITLE_7927' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App