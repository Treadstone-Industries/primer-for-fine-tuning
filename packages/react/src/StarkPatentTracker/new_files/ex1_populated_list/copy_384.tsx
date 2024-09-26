import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ebe3285a-933d-46ad-846b-42ffdc530db6', title: 'PATENT_TITLE_7363' },
            { id: '184c4399-6c68-4004-90cf-5517c4f50753', title: 'PATENT_TITLE_1850' },
            { id: '346719cd-610b-4bd0-9630-e78cb8807a9c', title: 'PATENT_TITLE_9870' },
            { id: 'add8d517-4803-4210-b3d0-163462cc7bad', title: 'PATENT_TITLE_4086' },
            { id: 'e9a0465e-e906-426e-9595-5e6b47624ce9', title: 'PATENT_TITLE_4117' },
            { id: '0c3ca2f9-56f2-4561-8996-301ef27eaf5d', title: 'PATENT_TITLE_7444' },
        ]}
    />
)

export default App