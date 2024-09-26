import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '73d86e1a-9a5d-4afc-9a27-3cb3d36cf302', title: 'PATENT_TITLE_2377' },
        { id: '48f9d753-d530-4fea-b2de-f4e2d809640a', title: 'PATENT_TITLE_6246' },
        { id: 'a94c4a46-4ad9-48d0-a5b4-3758087b1dc6', title: 'PATENT_TITLE_6777' },
        { id: '5a6254d0-fa77-4f9d-be47-c949c38d524d', title: 'PATENT_TITLE_1575' },
        { id: '82b657be-c1f1-4105-9d51-b8b3e2bf41ba', title: 'PATENT_TITLE_8205' },
        { id: 'fb7f7e7a-0660-4f77-b144-0c830aab0add', title: 'PATENT_TITLE_1618' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App