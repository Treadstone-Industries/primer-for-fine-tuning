import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '224da02c-d94f-4317-8bd2-c24a4aaa371a', title: 'PATENT_TITLE_1236' },
        { id: 'a5a50c14-ae47-4c61-9ce9-11c57618f216', title: 'PATENT_TITLE_6378' },
        { id: '53c6f7e7-bdcd-4e1f-91f3-c6a173882163', title: 'PATENT_TITLE_7645' },
        { id: '4af766e8-6c1b-4839-8c6a-881032ad6e27', title: 'PATENT_TITLE_2856' },
        { id: 'b3f2fb07-0d50-485f-9927-67bd2f0b6783', title: 'PATENT_TITLE_8871' },
        { id: 'ddef63f4-1ac4-4fde-bfa9-b1b05dc5fb67', title: 'PATENT_TITLE_7163' },
        { id: '1c07dc90-1b6b-4299-9fed-3fdaf4edb852', title: 'PATENT_TITLE_4740' },
        { id: 'db1f748e-78eb-4f4f-9f47-7a9e663d9ed0', title: 'PATENT_TITLE_4422' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App