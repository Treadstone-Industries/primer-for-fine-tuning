import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ef5432b6-de9b-4f77-91c4-045f2ae9d1c5', title: 'PATENT_TITLE_9923' },
        { id: '46c80ed9-12c8-4fcd-bbc6-8fda602a4218', title: 'PATENT_TITLE_8728' },
        { id: '88f5f9b0-8d36-41d9-ae31-ff82eddc1d55', title: 'PATENT_TITLE_8117' },
        { id: '33d83f5c-6b67-4c4f-93a0-56729595927a', title: 'PATENT_TITLE_6356' },
        { id: 'b33b77e2-f6d9-4942-9031-d993640e7494', title: 'PATENT_TITLE_1151' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App