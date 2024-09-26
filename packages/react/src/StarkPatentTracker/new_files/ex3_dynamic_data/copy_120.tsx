import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '39386189-292d-4bdc-8e22-63c25ba9e783', title: 'PATENT_TITLE_1812' },
        { id: '3b321830-604d-48aa-8a41-c6c0c314237f', title: 'PATENT_TITLE_1412' },
        { id: '3d14dd34-fd56-4c29-8d2d-18c910c13e7b', title: 'PATENT_TITLE_4599' },
        { id: '4ec48249-8faf-43bd-a232-28121072242a', title: 'PATENT_TITLE_9179' },
        { id: '564c938e-35e9-4d58-b5ee-25dd999a7476', title: 'PATENT_TITLE_3605' },
        { id: 'f140349d-5724-4abc-a409-3d6d3298d59c', title: 'PATENT_TITLE_3928' },
        { id: '6d2c9d97-2805-4021-986a-f17967bb84fc', title: 'PATENT_TITLE_5369' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App