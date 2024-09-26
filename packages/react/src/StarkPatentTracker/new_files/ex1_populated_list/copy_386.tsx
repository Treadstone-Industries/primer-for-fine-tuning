import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '842d227e-cb25-4f91-8471-32537ace7868', title: 'PATENT_TITLE_1687' },
            { id: 'c5504608-024d-4018-a78c-f95a8400f346', title: 'PATENT_TITLE_6698' },
            { id: '09008744-5290-477b-8ba1-3f8274fd72b2', title: 'PATENT_TITLE_1176' },
            { id: '36b2af06-f68f-480c-a7e8-e5bdad440ed3', title: 'PATENT_TITLE_3060' },
            { id: 'ab42196e-cdec-4cb1-ac2a-dbe7ecc72bfc', title: 'PATENT_TITLE_3839' },
            { id: '30d76f13-191a-43c8-ab64-69aabeb1cbc6', title: 'PATENT_TITLE_2811' },
        ]}
    />
)

export default App