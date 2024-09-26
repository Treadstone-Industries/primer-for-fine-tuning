import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '209c423d-de42-45eb-954b-5dd11e581496', title: 'PATENT_TITLE_4767' },
        { id: '29fcb990-98f6-4395-9f20-45039c88c350', title: 'PATENT_TITLE_5398' },
        { id: '784e5e4b-a9ce-4242-a620-d05fa42358a8', title: 'PATENT_TITLE_6391' },
        { id: '1ff30543-30c6-4cdf-b91e-3c6fd4c64550', title: 'PATENT_TITLE_4280' },
        { id: 'c4ff8b58-4b58-4df2-b158-2644e036506c', title: 'PATENT_TITLE_7654' },
        { id: 'e834e3a6-5241-494c-97c3-a6de89066400', title: 'PATENT_TITLE_4032' },
        { id: 'ffa87178-574a-488b-9b1b-306a015c0b93', title: 'PATENT_TITLE_1459' },
        { id: '8b2e0546-b1bf-4cf1-9624-5f30b6cfc417', title: 'PATENT_TITLE_3707' },
        { id: 'd2b5279b-3181-4d9b-8914-ffbc865230ad', title: 'PATENT_TITLE_9076' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App