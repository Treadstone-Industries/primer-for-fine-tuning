import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9f6a17a6-d2e3-43be-ad34-0854764cd88b', title: 'PATENT_TITLE_3600' },
        { id: '4705a043-937c-458c-891a-00666729ff71', title: 'PATENT_TITLE_9649' },
        { id: 'a899ce77-bd03-4327-90f7-d0bc90f5fe7d', title: 'PATENT_TITLE_1501' },
        { id: '7f55f144-7fcb-42bc-a05c-5cdf5d2ced96', title: 'PATENT_TITLE_1946' },
        { id: '61788e76-b71b-43a1-8d38-3ea47fac8c4e', title: 'PATENT_TITLE_2902' },
        { id: '7060e002-8cf9-4bda-975c-6a23da3d2f88', title: 'PATENT_TITLE_5703' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App