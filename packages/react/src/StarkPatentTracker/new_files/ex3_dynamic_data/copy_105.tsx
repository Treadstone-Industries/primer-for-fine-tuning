import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b0a5a425-08b2-4480-b286-2024820ac80b', title: 'PATENT_TITLE_7454' },
        { id: '26d0a856-1bf9-4b28-a57c-a0bf23bedac8', title: 'PATENT_TITLE_2879' },
        { id: 'd6cdcb26-6c5a-4e67-8217-dfc1c203a877', title: 'PATENT_TITLE_3825' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App