import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '82cc5540-8c1a-4639-bf5d-624e88cd506c', title: 'PATENT_TITLE_3173' },
            { id: 'a829650c-1696-4aa2-a8a4-fbff584553f1', title: 'PATENT_TITLE_8688' },
            { id: '277536b0-5eda-4309-9fa2-2a8203e64f7f', title: 'PATENT_TITLE_7558' },
            { id: '3c5b9eac-0305-492b-838f-6f820994def2', title: 'PATENT_TITLE_8998' },
        ]}
    />
)

export default App