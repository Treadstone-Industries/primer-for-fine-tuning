import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '273df372-da20-434c-b589-1828106fd98c', title: 'PATENT_TITLE_4149' },
        { id: 'c80579b8-8f11-4c9d-a4a8-820c1cec2112', title: 'PATENT_TITLE_1731' },
        { id: '109ed4bd-713f-4f25-9e1f-230b5f258e8b', title: 'PATENT_TITLE_9730' },
        { id: '0977075d-c234-4602-a58b-83ba585b4797', title: 'PATENT_TITLE_5215' },
        { id: '910599b2-fc07-453c-922d-acfb2ef369a4', title: 'PATENT_TITLE_4738' },
        { id: '6d17a0a7-6bc4-41b5-82e7-20723dcb9de1', title: 'PATENT_TITLE_5999' },
        { id: '08ff4d0b-b405-4095-98ad-b3b944f477be', title: 'PATENT_TITLE_3445' },
        { id: '55b4fd4e-836c-4811-9801-b361199d0598', title: 'PATENT_TITLE_4162' },
        { id: 'a5faf485-8010-4238-8856-b999734d4330', title: 'PATENT_TITLE_4131' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App