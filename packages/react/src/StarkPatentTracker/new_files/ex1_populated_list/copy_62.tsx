import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '86aff64e-5cec-4594-8e44-3d0c71c5d8b8', title: 'PATENT_TITLE_5614' },
            { id: 'c682d50b-a45b-4cfa-8f4e-e2b7a3742412', title: 'PATENT_TITLE_5685' },
            { id: 'ad759ab4-2ab4-45bb-bc21-9f152dc66214', title: 'PATENT_TITLE_6538' },
            { id: 'dfafef29-496e-4893-808f-b24639c6de0f', title: 'PATENT_TITLE_8950' },
            { id: '9e3747af-03bc-446b-afb6-217c4d9f01a8', title: 'PATENT_TITLE_5352' },
            { id: '0972d11c-0bac-4ef4-82c4-7cc75d93f647', title: 'PATENT_TITLE_8072' },
            { id: 'b072f70b-15b5-4dcb-b9e4-59d05f7cb974', title: 'PATENT_TITLE_1205' },
        ]}
    />
)

export default App