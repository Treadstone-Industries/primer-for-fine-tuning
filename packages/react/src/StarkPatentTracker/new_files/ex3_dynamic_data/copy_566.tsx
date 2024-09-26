import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b665b62b-4a9c-4aea-873f-a036b363b395', title: 'PATENT_TITLE_2672' },
        { id: 'c96c38c1-16cf-48d5-843f-987ec68c154f', title: 'PATENT_TITLE_3721' },
        { id: '786953bf-762e-4f4a-b57f-cdacb8879f90', title: 'PATENT_TITLE_7315' },
        { id: 'd03b7fa7-9aba-4606-95b5-1ed5908a0e75', title: 'PATENT_TITLE_7746' },
        { id: '0eb4566b-131e-4e7a-80b2-3ef442c9840f', title: 'PATENT_TITLE_6404' },
        { id: '50beb712-a673-457b-9d52-41173c969bfa', title: 'PATENT_TITLE_3886' },
        { id: 'f09914e8-61c0-4a49-bfa8-d46dd87fa70a', title: 'PATENT_TITLE_9893' },
        { id: '0c6f9699-98c3-4eee-80cb-cf89121ddd42', title: 'PATENT_TITLE_4878' },
        { id: '38468a51-2ed2-465a-8c14-cc692bffba91', title: 'PATENT_TITLE_9398' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App