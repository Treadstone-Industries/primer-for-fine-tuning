import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7f7c5943-9669-4cbb-90c8-9c23ae338a24', title: 'PATENT_TITLE_5355' },
            { id: '2037fa97-8262-4b76-8ba4-897a34229326', title: 'PATENT_TITLE_9312' },
        ]}
    />
)

export default App