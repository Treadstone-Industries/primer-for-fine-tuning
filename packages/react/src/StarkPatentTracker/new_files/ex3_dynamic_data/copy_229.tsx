import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '47c90d3e-5d88-4c51-ba18-b69109017bcb', title: 'PATENT_TITLE_4122' },
        { id: 'd1fc628a-bd9f-4ed3-a8d2-53e32020b80f', title: 'PATENT_TITLE_4196' },
        { id: '375634b6-540e-42ca-9770-eeffaf6114e5', title: 'PATENT_TITLE_7469' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App