import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fdad3f10-e95d-4dfa-abf0-096ef3a07b24', title: 'PATENT_TITLE_9954' },
            { id: 'cf7c2838-bbd1-4dd2-a942-22845432d321', title: 'PATENT_TITLE_4739' },
            { id: '0a988b82-66fd-4889-be7a-c3d812626d3b', title: 'PATENT_TITLE_3691' },
            { id: 'b9fb2d06-355c-4a74-8c7a-0f53182e1043', title: 'PATENT_TITLE_8004' },
        ]}
    />
)

export default App