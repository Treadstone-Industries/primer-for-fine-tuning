import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1bcbec9c-1285-48a6-a71b-ccd071289c7c', title: 'PATENT_TITLE_8555' },
            { id: 'bbb769f1-29a6-435c-916a-586ead3afd2a', title: 'PATENT_TITLE_5759' },
            { id: '1aea511c-a027-46bc-a4bf-6846b6fddcc1', title: 'PATENT_TITLE_1519' },
            { id: '56d6fd77-0ce6-4ebd-8edd-26c173ba8fdf', title: 'PATENT_TITLE_5565' },
            { id: '39150da3-f66c-4d7c-b44e-21285c004958', title: 'PATENT_TITLE_4612' },
            { id: '2bbf43f0-2286-4444-bf08-c352e20c1736', title: 'PATENT_TITLE_6203' },
        ]}
    />
)

export default App