import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9894e181-3b63-484a-9d89-e0821510a51f', title: 'PATENT_TITLE_5855' },
        { id: '6bee23c7-dd2f-411c-9f26-138d87f58edd', title: 'PATENT_TITLE_9272' },
        { id: '2495402f-7260-41cf-a564-ca7aedfb0cfa', title: 'PATENT_TITLE_1290' },
        { id: '3f21c7c3-7346-4701-990a-f614520d479b', title: 'PATENT_TITLE_3311' },
        { id: '2230975b-4c77-48ea-a206-77027f19e7a2', title: 'PATENT_TITLE_8835' },
        { id: '533ec720-1189-4445-bbfc-5291171a624f', title: 'PATENT_TITLE_7046' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App