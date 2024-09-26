import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3367c567-5f2a-456a-ad35-787c8a124ac1', title: 'PATENT_TITLE_9260' },
            { id: 'e0e534d3-f8c4-4262-b283-1037a3f1239e', title: 'PATENT_TITLE_4105' },
            { id: '5af2b1b9-fca0-4be6-b9b4-b7a68896f0ff', title: 'PATENT_TITLE_7082' },
            { id: '829db586-01e4-4377-8cc8-9d0ccb0e9f03', title: 'PATENT_TITLE_3311' },
            { id: '0a3591bf-2779-4748-bbae-4502c84b0db0', title: 'PATENT_TITLE_2156' },
            { id: 'bf02d39b-0f3a-4a47-8b2e-7ce6c62c7b66', title: 'PATENT_TITLE_2737' },
            { id: '73570ca2-d10a-4d78-b992-5570dd8f7abe', title: 'PATENT_TITLE_7216' },
            { id: '0098867a-2ccc-4748-8496-fb6485518c1d', title: 'PATENT_TITLE_1676' },
            { id: 'bc0b4d80-12d0-4f66-86b7-a1c58f6c1bfd', title: 'PATENT_TITLE_8826' },
        ]}
    />
)

export default App