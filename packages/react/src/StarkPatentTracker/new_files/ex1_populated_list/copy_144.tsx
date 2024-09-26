import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5ee530fe-4229-445f-b5de-8a5a6784a5f2', title: 'PATENT_TITLE_9440' },
            { id: 'dbdfbbce-bad9-4c7d-b4b3-0e75a26250dc', title: 'PATENT_TITLE_5322' },
            { id: '0062f83f-b0a2-42fa-8f4e-ad816e9bc7a5', title: 'PATENT_TITLE_7124' },
            { id: 'd8d98a9b-5934-4ea8-8a18-c46c57f4bd74', title: 'PATENT_TITLE_3561' },
            { id: '7ed43c45-ede6-4eaa-9bd2-4e075b54629c', title: 'PATENT_TITLE_6112' },
            { id: 'fa4b1c55-e7b1-4e4c-a068-d43bc1864b24', title: 'PATENT_TITLE_5903' },
        ]}
    />
)

export default App