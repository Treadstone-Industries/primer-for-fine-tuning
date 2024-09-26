import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '578138f7-4de5-4945-a70f-1b2ab87fc243', title: 'PATENT_TITLE_9582' },
            { id: '79f1e95c-4f45-4ac1-8ebe-8eae651b783c', title: 'PATENT_TITLE_8905' },
            { id: '91b3853f-9f86-4e54-a4fd-98eab393456d', title: 'PATENT_TITLE_4655' },
            { id: 'd128a8b5-b025-4bb3-90db-3d46c3a31493', title: 'PATENT_TITLE_9637' },
            { id: 'ef884675-2d3b-4860-9d96-71f573845642', title: 'PATENT_TITLE_9382' },
            { id: 'db35233e-5146-42c8-84c0-8c17ff8c1d23', title: 'PATENT_TITLE_9016' },
        ]}
    />
)

export default App