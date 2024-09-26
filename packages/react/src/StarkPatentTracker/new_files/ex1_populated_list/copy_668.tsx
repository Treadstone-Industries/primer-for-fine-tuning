import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '80898132-381a-497d-a861-45c6a2c74259', title: 'PATENT_TITLE_7347' },
            { id: '8d7f01b6-6be2-483a-a76c-fd5c07d6da37', title: 'PATENT_TITLE_4570' },
            { id: 'f4045474-4a1b-4fa8-8e93-37a028c88413', title: 'PATENT_TITLE_6114' },
            { id: '62c6ad9f-ec3f-438b-b7ac-93e303e5973b', title: 'PATENT_TITLE_9834' },
            { id: 'a8c12cfb-96d6-41ac-8f05-284a0df6562c', title: 'PATENT_TITLE_9455' },
            { id: '67ec4f9a-ea32-4e2b-9bb9-cb5e31a6dcd9', title: 'PATENT_TITLE_8933' },
        ]}
    />
)

export default App