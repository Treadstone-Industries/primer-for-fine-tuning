import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5b920f1e-0641-430b-9d6a-0988c860a3f7', title: 'PATENT_TITLE_5484' },
            { id: '49b20de1-de68-427c-b8e0-3b28e68ed7b7', title: 'PATENT_TITLE_2854' },
            { id: '9ab132af-870d-43c1-ba5e-4bf86dda4f56', title: 'PATENT_TITLE_9790' },
            { id: '0d8786e9-779b-4af0-952d-eabb5f541b6f', title: 'PATENT_TITLE_2066' },
            { id: '76022751-ebab-4820-81e5-c4f73a20170f', title: 'PATENT_TITLE_2499' },
            { id: 'd2d8f99f-4017-490d-80af-6a3d3370cc0b', title: 'PATENT_TITLE_1184' },
        ]}
    />
)

export default App