import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ed5250f0-fcc4-4162-9c23-79eee73c2a87', title: 'PATENT_TITLE_9983' },
            { id: 'b5ebc431-30bd-4b72-9657-447dbf328eec', title: 'PATENT_TITLE_2867' },
            { id: '662c1610-3856-46cc-8efb-67c4e4833432', title: 'PATENT_TITLE_2106' },
            { id: '8f821ac4-8949-4221-a3c2-6bfc70fb7ce8', title: 'PATENT_TITLE_6481' },
            { id: '228cc6c4-081d-44b6-aa23-f5531e9f873e', title: 'PATENT_TITLE_9746' },
            { id: '0e8d6a55-fe41-4f32-a743-aa5bdd3ab5a1', title: 'PATENT_TITLE_9911' },
        ]}
    />
)

export default App