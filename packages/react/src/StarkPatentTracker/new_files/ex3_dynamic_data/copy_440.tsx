import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '399d199d-4013-4777-b7e9-e3a54dea8ee7', title: 'PATENT_TITLE_7318' },
        { id: 'b98c6ee3-b539-43cf-9683-02c2ff420fd6', title: 'PATENT_TITLE_8285' },
        { id: '8f84eae5-05d8-4f96-b362-e892b409d97b', title: 'PATENT_TITLE_7190' },
        { id: 'c9fc9254-b543-4a18-905a-55f9dcfd5b2d', title: 'PATENT_TITLE_6433' },
        { id: '2b7945d6-5add-4257-9ca6-571fb8ce4093', title: 'PATENT_TITLE_5464' },
        { id: 'ced998a2-561f-4b11-9475-415b43ef7d06', title: 'PATENT_TITLE_5587' },
        { id: '541ee438-09c7-4baa-87c7-d47255fdcd67', title: 'PATENT_TITLE_6763' },
        { id: 'cb54503b-d351-44ac-a268-7c8cffea3b5d', title: 'PATENT_TITLE_8024' },
        { id: '9ce15f10-9945-4922-b675-07958b804de8', title: 'PATENT_TITLE_3422' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App