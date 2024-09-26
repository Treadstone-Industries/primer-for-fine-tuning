import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8e371a46-6d60-45c9-8a41-c0659f4ddeed', title: 'PATENT_TITLE_6563' },
        { id: '4c3b5327-1035-427b-84dc-37c76a29b2b0', title: 'PATENT_TITLE_5284' },
        { id: 'cb6290c0-b08a-4515-8f83-d0ad122236c4', title: 'PATENT_TITLE_6626' },
        { id: '08bbfad0-adf8-4d91-9d5c-f340b66b1545', title: 'PATENT_TITLE_8014' },
        { id: '9de27d35-fc19-426b-84fa-cc7e5219764c', title: 'PATENT_TITLE_6275' },
        { id: 'd1ee33c8-8a0d-4bb2-92bc-65184a50a77a', title: 'PATENT_TITLE_1808' },
        { id: '79a432e9-f7ac-4fb4-8e57-e2ca373b6a38', title: 'PATENT_TITLE_4617' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App