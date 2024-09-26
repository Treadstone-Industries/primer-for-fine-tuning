import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ac3728be-52da-4585-b2d2-51c3f4f6a1bd', title: 'PATENT_TITLE_5747' },
            { id: '96a7bd4c-285e-46aa-961b-68c19e306ac8', title: 'PATENT_TITLE_3699' },
            { id: '92a0fa3b-570d-41eb-ab93-ad096fb761d7', title: 'PATENT_TITLE_4967' },
            { id: '872258a2-b3d9-4245-acb5-779896297158', title: 'PATENT_TITLE_5129' },
            { id: 'efa4000e-4dab-4ef4-9a43-2771890c5dc3', title: 'PATENT_TITLE_4498' },
            { id: 'e6cbe45a-19a5-44d0-adf5-f137dc8f4b63', title: 'PATENT_TITLE_1173' },
        ]}
    />
)

export default App