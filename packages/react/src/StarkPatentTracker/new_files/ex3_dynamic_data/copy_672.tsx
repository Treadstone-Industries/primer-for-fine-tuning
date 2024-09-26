import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f9c77a4f-a427-45ed-ba7a-cc4b6920afdf', title: 'PATENT_TITLE_7232' },
        { id: 'ece36fed-85de-485c-bfdc-9879c8b6635a', title: 'PATENT_TITLE_1883' },
        { id: 'f2a87215-b5af-417a-8865-7fa0521263f2', title: 'PATENT_TITLE_4600' },
        { id: 'e69a3cd5-7730-42fa-9e39-040b910c1e3b', title: 'PATENT_TITLE_5204' },
        { id: 'fd58ff2c-36fb-43ac-9741-9a0dc41af200', title: 'PATENT_TITLE_9058' },
        { id: '580a3ddc-3dca-4360-bf1c-95a8253cf135', title: 'PATENT_TITLE_5424' },
        { id: '18add24d-87c9-4442-beda-a468b3a8ef91', title: 'PATENT_TITLE_2959' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App