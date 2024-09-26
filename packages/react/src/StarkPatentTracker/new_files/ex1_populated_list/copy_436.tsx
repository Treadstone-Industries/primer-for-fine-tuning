import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '58544800-30cb-44d8-acb1-693678d53cc5', title: 'PATENT_TITLE_9693' },
            { id: 'f6d4b9fa-a746-44e0-a719-7aed04ee07e7', title: 'PATENT_TITLE_7702' },
            { id: 'c37731de-b404-4249-9990-5ad822d5bd9c', title: 'PATENT_TITLE_9731' },
            { id: '9133d55e-bfd3-41c6-9c07-76550d04e2c9', title: 'PATENT_TITLE_4167' },
            { id: '3d527fd7-773e-49f8-9e20-e7ae49c5d199', title: 'PATENT_TITLE_9696' },
        ]}
    />
)

export default App