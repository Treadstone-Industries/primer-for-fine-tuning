import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd2d898d4-ce97-43f1-858d-07de6c57d927', title: 'PATENT_TITLE_1395' },
            { id: 'af24c8d5-4d4a-4918-b1ab-affe0b41d506', title: 'PATENT_TITLE_3167' },
            { id: 'cd57aabf-53fd-422a-bf74-8d06251461fa', title: 'PATENT_TITLE_5313' },
        ]}
    />
)

export default App