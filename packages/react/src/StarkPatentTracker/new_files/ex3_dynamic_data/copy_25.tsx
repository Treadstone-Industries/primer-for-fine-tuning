import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '38bfc692-95e2-4d85-8db1-50117d7424c5', title: 'PATENT_TITLE_3028' },
        { id: '8d616439-e9ea-40fb-9540-0d80dae37c69', title: 'PATENT_TITLE_1275' },
        { id: '66d93372-ab2e-4261-bbf1-1c715598785a', title: 'PATENT_TITLE_5654' },
        { id: '4d846c01-ba97-4588-88fe-c1366b39aad1', title: 'PATENT_TITLE_2295' },
        { id: 'd16e5048-2a33-43b2-bc7e-4682f2d18f58', title: 'PATENT_TITLE_6629' },
        { id: '44ec096e-fbc0-4ff4-a063-7e6fabef860e', title: 'PATENT_TITLE_4353' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App