import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3596b689-d040-411e-8622-e96babf5d180', title: 'PATENT_TITLE_1023' },
            { id: '90cca699-4d91-4cba-be6f-7f0e042cb41e', title: 'PATENT_TITLE_3177' },
            { id: 'f51af62d-6cdb-42da-bb44-7f2b529a4df3', title: 'PATENT_TITLE_7783' },
            { id: '5844c7ba-becb-487b-9bdb-1223b5e94e73', title: 'PATENT_TITLE_9760' },
            { id: '6b83c063-c85c-4478-b2b0-51228997eb0b', title: 'PATENT_TITLE_9207' },
            { id: 'd598e569-d14c-4cf1-89bd-908eaaf4dbec', title: 'PATENT_TITLE_3758' },
        ]}
    />
)

export default App