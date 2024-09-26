import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c001a715-92fb-4602-8a11-0ce07972e6f2', title: 'PATENT_TITLE_8414' },
            { id: '9c323ed3-7302-4834-8b62-ceff00a00bc0', title: 'PATENT_TITLE_6588' },
            { id: 'ef7cbd6d-d697-4046-b22e-8d80d15ea98b', title: 'PATENT_TITLE_5638' },
            { id: '230baa4d-cbbe-48ed-b50f-2d46d81137b6', title: 'PATENT_TITLE_5347' },
            { id: '6d59eb3a-cbf1-4892-93cc-63e576a18f9b', title: 'PATENT_TITLE_7650' },
            { id: 'c8db171a-65d8-4626-8a9c-7abeba949a5f', title: 'PATENT_TITLE_6016' },
            { id: '3ce54af8-c4a2-403b-a5a0-a38ac7921233', title: 'PATENT_TITLE_2744' },
            { id: 'a50d786b-ad9d-4e99-8fa7-e855ee095768', title: 'PATENT_TITLE_6162' },
        ]}
    />
)

export default App