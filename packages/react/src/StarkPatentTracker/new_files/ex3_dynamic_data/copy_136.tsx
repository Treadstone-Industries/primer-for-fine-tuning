import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b9bae9d9-aa4f-482b-a3c0-4aea619a5b42', title: 'PATENT_TITLE_2334' },
        { id: '8a27aed3-c822-4be8-ab4d-436f07287aeb', title: 'PATENT_TITLE_1765' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App