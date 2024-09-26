import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '261e86a9-512b-4df8-83e2-55b2b344b3a6', title: 'PATENT_TITLE_2339' },
            { id: 'a3395284-5fed-4cdf-a26c-79273d1ff24e', title: 'PATENT_TITLE_3095' },
            { id: '251252eb-8e1a-458e-be8a-d75d3422075d', title: 'PATENT_TITLE_9595' },
            { id: 'b0e96524-70cc-4da2-9457-e5080e38092b', title: 'PATENT_TITLE_3870' },
        ]}
    />
)

export default App