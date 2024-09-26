import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9782a4e5-9e66-46df-af00-568aa9d8ff18', title: 'PATENT_TITLE_2307' },
        { id: 'abd9cbf0-851b-43d6-9dcb-059c87b2bca5', title: 'PATENT_TITLE_9353' },
        { id: 'e38a4e24-73ee-4476-a3a1-cbbb1543a944', title: 'PATENT_TITLE_2405' },
        { id: '891a72cb-aeac-4630-b02e-fad915aed7f7', title: 'PATENT_TITLE_1280' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App