import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fb87cf1e-4c1c-4c48-8308-4ad40b3cc041', title: 'PATENT_TITLE_6086' },
        { id: 'b6044b6e-97cc-44d2-951d-2ae45cf9691d', title: 'PATENT_TITLE_5908' },
        { id: '38100265-bbb5-4fe0-b89b-aa00359e5047', title: 'PATENT_TITLE_9359' },
        { id: '502c2b0c-167b-4945-ab56-5e74cabe31e7', title: 'PATENT_TITLE_4105' },
        { id: '958d6cae-fa4d-4cc0-9070-54f97e2b3207', title: 'PATENT_TITLE_4819' },
        { id: 'b5c8de58-1a2b-472c-a145-3bf9e75fc0a5', title: 'PATENT_TITLE_1486' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App