import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fcd980b5-14d9-4217-a79c-6e3c310f7e34', title: 'PATENT_TITLE_2161' },
            { id: 'ef742762-17ba-40d3-b60f-67ded91e7c91', title: 'PATENT_TITLE_8203' },
            { id: '980e2404-1eeb-4902-a7aa-66deca519622', title: 'PATENT_TITLE_3893' },
            { id: '48114122-0568-45a6-8665-4dcfb1fba99e', title: 'PATENT_TITLE_8414' },
            { id: 'd299336c-e185-4fd6-b867-bb8ca079a6dc', title: 'PATENT_TITLE_2038' },
            { id: '656298ce-29a0-4bf6-b091-7f4357010c84', title: 'PATENT_TITLE_2628' },
            { id: '9f56a7d6-9d47-4394-bd9c-0f9a52965406', title: 'PATENT_TITLE_9460' },
            { id: '923560f5-8029-48ff-9de5-85e90d703585', title: 'PATENT_TITLE_2937' },
            { id: 'bc928bf5-ac74-44c0-836c-26abcd856654', title: 'PATENT_TITLE_3659' },
        ]}
    />
)

export default App