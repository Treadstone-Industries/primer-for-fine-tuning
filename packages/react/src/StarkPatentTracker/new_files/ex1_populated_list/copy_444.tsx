import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '418da155-96db-4936-a073-7b66559b0fab', title: 'PATENT_TITLE_4678' },
            { id: '8e20d973-8a21-42f2-b41e-134785d77898', title: 'PATENT_TITLE_4987' },
            { id: 'dfa837d7-2073-4182-8b36-20e7a184116d', title: 'PATENT_TITLE_3847' },
            { id: 'b5d3d125-c65e-492c-887b-310117fc8be5', title: 'PATENT_TITLE_2625' },
            { id: 'b5d1e2da-bd7c-4b2a-8122-a41cae006eb1', title: 'PATENT_TITLE_8249' },
            { id: 'c574d119-1e43-4346-8f6d-e1e617f1ddd6', title: 'PATENT_TITLE_8862' },
            { id: '8bd9ba02-4fc6-466a-910a-3698edb5a579', title: 'PATENT_TITLE_9095' },
            { id: '883cbf1e-3584-425d-8c67-0234d1efaa55', title: 'PATENT_TITLE_6228' },
        ]}
    />
)

export default App