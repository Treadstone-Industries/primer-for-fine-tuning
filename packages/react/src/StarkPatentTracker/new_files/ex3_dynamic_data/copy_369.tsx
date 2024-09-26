import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ca69ac59-51b3-4d1a-87bf-00375b56b9c8', title: 'PATENT_TITLE_4264' },
        { id: 'edcae77c-348c-4079-a942-8fedf5935529', title: 'PATENT_TITLE_7845' },
        { id: '151c6b15-b0d0-4a07-a4a5-1cc985140a65', title: 'PATENT_TITLE_4161' },
        { id: '2dab276f-bf5a-40ec-9d6a-d56565e68ae9', title: 'PATENT_TITLE_4521' },
        { id: '909b66c6-1aa6-4f2a-b1ca-764ef4e78d46', title: 'PATENT_TITLE_1849' },
        { id: 'd603ecd1-88dc-4740-b5c3-8581f334dda7', title: 'PATENT_TITLE_2492' },
        { id: 'eae05b5e-834a-4d61-8594-e7160d8a1882', title: 'PATENT_TITLE_4840' },
        { id: '667a1027-9562-4a85-b093-92b26c6064cb', title: 'PATENT_TITLE_4886' },
        { id: 'db414544-4a37-45a5-9f01-dc826ee29d75', title: 'PATENT_TITLE_7394' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App