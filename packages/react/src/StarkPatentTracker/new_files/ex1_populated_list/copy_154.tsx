import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b24daadd-7c0b-4e6b-99e3-07c42edbe57b', title: 'PATENT_TITLE_5043' },
            { id: 'fd117408-f33a-4168-89e5-8ebd98243ba2', title: 'PATENT_TITLE_5201' },
            { id: '8195deff-2f47-4d9c-aec0-7f737bbe5cc1', title: 'PATENT_TITLE_1962' },
            { id: 'bfbfe9d9-cfe3-48a7-a1ad-bcf2070b8e24', title: 'PATENT_TITLE_2590' },
            { id: '4c6d2bcc-2f49-4eeb-9aa8-2b84df53ca52', title: 'PATENT_TITLE_7359' },
            { id: '285ca64d-cb25-4cdc-896e-13cb9831c49e', title: 'PATENT_TITLE_3449' },
        ]}
    />
)

export default App