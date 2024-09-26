import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6d4a60f0-909a-49b5-832d-bcf66443a6fe', title: 'PATENT_TITLE_1774' },
        { id: 'ba669c64-ad4d-4074-868c-b6a24f1cfd53', title: 'PATENT_TITLE_9249' },
        { id: 'fef53c9c-901d-415f-b8d4-7669d04f3e10', title: 'PATENT_TITLE_2090' },
        { id: 'e22527fe-385a-46dd-9dae-9956c4548885', title: 'PATENT_TITLE_2162' },
        { id: '602fa872-88b1-4c91-8915-72cffc54c003', title: 'PATENT_TITLE_8759' },
        { id: '4fd8425d-8b8c-4408-b6fe-febe1c075c31', title: 'PATENT_TITLE_4180' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App