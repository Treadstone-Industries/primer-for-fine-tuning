import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5b3e47f3-1461-42af-99e2-d51ef6b87d4b', title: 'PATENT_TITLE_3348' },
            { id: 'db82d54b-1703-49f8-9fd7-a193a7093e0a', title: 'PATENT_TITLE_4322' },
            { id: '21f77b9d-1cee-4746-a444-77ae74375898', title: 'PATENT_TITLE_8647' },
            { id: '3de5e9e3-74e0-4bb5-8da7-320f5842f835', title: 'PATENT_TITLE_5739' },
            { id: '16d0c6ac-888b-4b70-912f-103026e171af', title: 'PATENT_TITLE_8062' },
            { id: 'fede3d4f-2d8f-4e57-abe6-a6838a252a80', title: 'PATENT_TITLE_2323' },
            { id: 'e84b177b-21dc-40ed-b7c6-6c496a5e2ad8', title: 'PATENT_TITLE_3537' },
            { id: '1ddb82d1-552b-4c0b-8e4b-a8c51e5c7d0d', title: 'PATENT_TITLE_7190' },
            { id: 'c94db976-cb9a-49bd-9ba7-33845476c922', title: 'PATENT_TITLE_7080' },
        ]}
    />
)

export default App