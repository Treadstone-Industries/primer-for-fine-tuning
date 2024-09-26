import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6e82a4a6-1a06-40bd-83b9-fe578a307e03', title: 'PATENT_TITLE_9692' },
            { id: '16914142-8776-48fc-9c5a-4648ed2bfaae', title: 'PATENT_TITLE_8222' },
            { id: '87253be7-f177-4573-a401-7be472a41f5f', title: 'PATENT_TITLE_1444' },
            { id: '0feaff86-4d49-41e1-a55d-d2d1fbfb6323', title: 'PATENT_TITLE_3596' },
            { id: '3eec05af-0a77-4815-9aee-07fce4109d48', title: 'PATENT_TITLE_6463' },
        ]}
    />
)

export default App