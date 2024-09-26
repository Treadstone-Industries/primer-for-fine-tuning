import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ad822b60-6958-4fbe-92de-11642b85ef1b', title: 'PATENT_TITLE_6615' },
            { id: '719968bb-6761-4846-9159-9ba42074b704', title: 'PATENT_TITLE_9389' },
            { id: '2ad94bfa-21b8-4e79-8a44-244979c742cc', title: 'PATENT_TITLE_4284' },
            { id: 'd74ea416-507d-4041-9e70-fab7ab7cc00a', title: 'PATENT_TITLE_1390' },
            { id: '68e6e8e8-7ec4-4f15-9d2b-967a3b9e5d77', title: 'PATENT_TITLE_7938' },
            { id: 'cd0bbcce-6102-4024-8129-20d94fc77efb', title: 'PATENT_TITLE_7442' },
        ]}
    />
)

export default App