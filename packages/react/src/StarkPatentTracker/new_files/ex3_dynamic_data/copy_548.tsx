import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9cec097d-f7d2-42e6-aa25-21b49476a563', title: 'PATENT_TITLE_7546' },
        { id: '616b1c08-d5e2-429e-a734-2f2c9f52ecf9', title: 'PATENT_TITLE_9582' },
        { id: '19ce4d62-7944-4706-8eac-35465ab54178', title: 'PATENT_TITLE_6545' },
        { id: 'd82fcdf6-ebe7-4f19-8aa5-ca8dc8c73138', title: 'PATENT_TITLE_6820' },
        { id: '40cdb8d9-2083-4c79-b00f-781bc4474baf', title: 'PATENT_TITLE_9930' },
        { id: '5dfd5c5a-b23a-4cfd-ba2e-d855bbb8c38c', title: 'PATENT_TITLE_4345' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App