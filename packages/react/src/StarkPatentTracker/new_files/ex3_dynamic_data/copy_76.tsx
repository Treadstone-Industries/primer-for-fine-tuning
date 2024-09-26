import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '27c30b2a-0c79-43cd-8399-d36d50f96331', title: 'PATENT_TITLE_9500' },
        { id: '39c720a2-541d-4840-bca0-bccb2687daa4', title: 'PATENT_TITLE_9997' },
        { id: '7170a17f-add9-4bcc-8634-f2eecf1f6733', title: 'PATENT_TITLE_5729' },
        { id: '9c13bf21-a8c0-42d4-a756-9c531437cd11', title: 'PATENT_TITLE_4773' },
        { id: '17f54699-3ef1-4b09-95e2-05b9c6e42676', title: 'PATENT_TITLE_6406' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App