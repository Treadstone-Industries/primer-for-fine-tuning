import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b0a51c65-7ceb-4355-ba2d-762db3176b50', title: 'PATENT_TITLE_1702' },
            { id: '259779ba-0f3b-4361-a81e-4931b02488d7', title: 'PATENT_TITLE_8025' },
            { id: '9bbe1098-3725-4416-82ff-1f0a1050e520', title: 'PATENT_TITLE_9729' },
            { id: '4d5ab33e-7574-4f92-aaeb-16964c1c9305', title: 'PATENT_TITLE_9076' },
            { id: 'a4efb530-f79d-4ec7-8d4d-413626cf5099', title: 'PATENT_TITLE_2356' },
        ]}
    />
)

export default App