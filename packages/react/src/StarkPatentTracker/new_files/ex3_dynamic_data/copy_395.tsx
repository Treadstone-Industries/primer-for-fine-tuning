import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '71b714ac-9b5b-4ce9-91cf-c3e9b0e6edd5', title: 'PATENT_TITLE_9355' },
        { id: '91c1b414-d86d-4891-8062-a69fb1fbbf03', title: 'PATENT_TITLE_3953' },
        { id: '181fb2f9-deaf-4866-a540-3092b887522d', title: 'PATENT_TITLE_9174' },
        { id: '0651b287-59be-441d-aefb-131d2f5c93b1', title: 'PATENT_TITLE_1374' },
        { id: '3f0cc42e-1164-4418-8ec7-1fca0d146033', title: 'PATENT_TITLE_7284' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App