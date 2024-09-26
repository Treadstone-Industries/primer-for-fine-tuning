import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '419951a5-e935-4611-b138-12fcb449df0d', title: 'PATENT_TITLE_8404' },
        { id: '1a726f05-6e42-4ca3-911f-bc39014425af', title: 'PATENT_TITLE_7354' },
        { id: '5eae1c3a-139e-4357-967f-c7d838730058', title: 'PATENT_TITLE_9437' },
        { id: '4bc64922-25d7-46f6-8f02-c31e0ebbc345', title: 'PATENT_TITLE_4632' },
        { id: '4ac1b9a0-65c8-4115-ae65-7879328e10f3', title: 'PATENT_TITLE_9234' },
        { id: '5a7f4b6d-b448-495f-b54b-fc98f96ce53a', title: 'PATENT_TITLE_8767' },
        { id: 'b92dd411-d822-4dc6-9b42-4b9922a9bb6e', title: 'PATENT_TITLE_6828' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App