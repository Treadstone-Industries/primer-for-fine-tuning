import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dc187cf3-9030-434d-b40c-4a95b0878323', title: 'PATENT_TITLE_3157' },
        { id: '003e4048-8552-455f-8d6c-2cc2a3a3ac7e', title: 'PATENT_TITLE_8287' },
        { id: '68299196-9228-4c48-9c93-c8e19876ccf9', title: 'PATENT_TITLE_4774' },
        { id: '17625f1d-ebab-416b-b9bd-bea54108f570', title: 'PATENT_TITLE_6766' },
        { id: 'dc630da2-32f0-45b6-9854-dd788e318d73', title: 'PATENT_TITLE_7034' },
        { id: '48c0664c-80e3-4539-be8a-5264e1d59052', title: 'PATENT_TITLE_1361' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App