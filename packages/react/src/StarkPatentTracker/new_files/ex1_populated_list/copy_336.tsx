import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '133a0643-1b34-4239-9f9a-c950b4f9d979', title: 'PATENT_TITLE_4120' },
            { id: '14de1659-77fc-4fa3-90d3-acdc62a52ed3', title: 'PATENT_TITLE_2299' },
            { id: '04ebfe31-9adf-4d1d-b839-01366e9bb772', title: 'PATENT_TITLE_2312' },
            { id: 'f1495201-e891-4e18-8ccc-a3f84dae3955', title: 'PATENT_TITLE_1544' },
            { id: '8fbc2ff8-4008-4ce2-8047-53aabdde126d', title: 'PATENT_TITLE_3090' },
            { id: '1e972666-fc26-47dc-a397-5a4e969c33da', title: 'PATENT_TITLE_8968' },
            { id: 'f62f3cb1-85cd-4336-af6d-3cb22cb40ae6', title: 'PATENT_TITLE_9802' },
        ]}
    />
)

export default App