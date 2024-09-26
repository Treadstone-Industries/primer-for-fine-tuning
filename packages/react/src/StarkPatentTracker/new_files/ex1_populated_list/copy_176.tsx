import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2fd39234-6c53-4727-b01f-b1f20903ac8d', title: 'PATENT_TITLE_1121' },
            { id: '17897ad8-8077-4aea-ae6a-64d436fb74bc', title: 'PATENT_TITLE_1614' },
            { id: '2152d30d-d457-4d95-9366-3656cc1bd01a', title: 'PATENT_TITLE_9346' },
            { id: '6b88b44c-ecb3-4e7a-a0e3-bc115e53c301', title: 'PATENT_TITLE_7965' },
            { id: '8d242987-a961-4a14-ab9d-77ac428b8425', title: 'PATENT_TITLE_3044' },
            { id: 'f3c87fae-5baf-4ba9-ba14-348da73169f3', title: 'PATENT_TITLE_5729' },
            { id: '1fc868a2-fa7b-4bfc-b48e-109495cd70de', title: 'PATENT_TITLE_3180' },
            { id: 'fc26c132-2eba-4729-8cce-e332a8aa8b57', title: 'PATENT_TITLE_6722' },
        ]}
    />
)

export default App