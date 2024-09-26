import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd24fa673-c985-469b-bb48-93d95305869d', title: 'PATENT_TITLE_3689' },
            { id: '409c97ba-ed74-4962-a3ed-63409cfdcbe8', title: 'PATENT_TITLE_5043' },
            { id: 'abe1de87-e8dc-457a-ac83-914643f53adf', title: 'PATENT_TITLE_2525' },
            { id: 'f3a3d11b-7a50-4507-a14f-0901308958c0', title: 'PATENT_TITLE_4285' },
            { id: '1e1c033b-3358-475b-a2bb-ed8b8756b8fe', title: 'PATENT_TITLE_6984' },
            { id: '3de083d1-a598-47d4-9bc6-b9708a5c36c8', title: 'PATENT_TITLE_1081' },
        ]}
    />
)

export default App