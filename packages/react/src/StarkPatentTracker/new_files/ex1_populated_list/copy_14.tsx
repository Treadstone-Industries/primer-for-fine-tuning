import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9353f4eb-d54d-4c33-b586-96361511e203', title: 'PATENT_TITLE_2102' },
            { id: 'b2ae6509-0821-4805-8dff-de2f9ce806e9', title: 'PATENT_TITLE_2343' },
            { id: 'b23d6fac-bc88-49d0-bf56-b7cbb3b962b0', title: 'PATENT_TITLE_3868' },
        ]}
    />
)

export default App