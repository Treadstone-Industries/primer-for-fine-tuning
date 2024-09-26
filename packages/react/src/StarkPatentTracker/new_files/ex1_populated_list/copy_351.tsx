import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '88d19215-deda-48d8-8f8a-6097f8e0e44f', title: 'PATENT_TITLE_2058' },
            { id: '57d41ba8-73a8-405b-874d-f16db06960ba', title: 'PATENT_TITLE_9359' },
            { id: '1e85f9c5-c1ad-491e-85ac-92ab618eebb4', title: 'PATENT_TITLE_1315' },
            { id: '414da35b-78ca-41b2-9dd6-ace39aa52bd1', title: 'PATENT_TITLE_5014' },
            { id: '9e818143-f0be-484f-8272-c097974badbd', title: 'PATENT_TITLE_8569' },
            { id: '5022e1af-319d-4026-8beb-84e28252ac1f', title: 'PATENT_TITLE_2620' },
            { id: 'a37eec7e-f3f0-4756-8811-58e2d0dbac32', title: 'PATENT_TITLE_5478' },
            { id: 'aad89b1b-c5fc-4517-869c-15873d3f73ef', title: 'PATENT_TITLE_9902' },
        ]}
    />
)

export default App