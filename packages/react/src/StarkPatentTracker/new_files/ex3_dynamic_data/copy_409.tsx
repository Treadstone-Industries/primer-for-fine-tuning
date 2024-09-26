import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '22aaf682-a6d1-4688-b984-f12fb2376c2f', title: 'PATENT_TITLE_1226' },
        { id: '6b1ae7fc-d55d-4ff6-9b4f-70ca2f10351a', title: 'PATENT_TITLE_6696' },
        { id: '000ea55e-e26d-4c54-8197-3cda5a20478b', title: 'PATENT_TITLE_3298' },
        { id: 'bef3be7d-9dc8-489f-ba5e-0c887de2b426', title: 'PATENT_TITLE_4940' },
        { id: '7ac71947-6365-4031-ae28-10259835d0b2', title: 'PATENT_TITLE_1250' },
        { id: 'f846b5fd-de75-413e-a956-7fcd0fb28022', title: 'PATENT_TITLE_1015' },
        { id: '6dddc729-ec2e-4650-83a4-dbf64baa6ad2', title: 'PATENT_TITLE_2556' },
        { id: '05ab5653-7c34-4c60-b6e0-c6dcad1279e6', title: 'PATENT_TITLE_4240' },
        { id: '91fce47b-09f8-4eeb-97e4-9401e85fdfa9', title: 'PATENT_TITLE_4866' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App