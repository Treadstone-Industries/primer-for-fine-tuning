import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f86fb59e-ee1a-4433-941b-cb7a7d2d27be', title: 'PATENT_TITLE_8255' },
        { id: 'f6736a4b-7dab-49cb-bffe-360481ea64b5', title: 'PATENT_TITLE_8844' },
        { id: '9e48e89b-5c36-4641-a831-0cc4c4fa5e51', title: 'PATENT_TITLE_2767' },
        { id: 'c78dfc61-8b27-404c-b9b5-ae15077ff944', title: 'PATENT_TITLE_2699' },
        { id: '11fd3bef-b8b1-43ba-a2be-7a0914dbcbb4', title: 'PATENT_TITLE_2676' },
        { id: '53809fd2-5e64-423b-abbf-4a5b546e67b9', title: 'PATENT_TITLE_8331' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App