import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7713e13f-cae7-440b-8788-978f8cdf3aa6', title: 'PATENT_TITLE_3827' },
            { id: '9555be0a-1aca-4b7c-b424-eb5ca7df7741', title: 'PATENT_TITLE_9273' },
            { id: 'b0ef7c31-332d-469f-bdda-75a2df8204a8', title: 'PATENT_TITLE_6404' },
            { id: '25c66919-bb31-44ae-a561-42373ae990b8', title: 'PATENT_TITLE_4015' },
            { id: '69bc34a2-a18d-448a-a15e-962768ae237d', title: 'PATENT_TITLE_9568' },
            { id: '537f37a7-1d6e-4ba2-a649-2726ccd7b019', title: 'PATENT_TITLE_1674' },
            { id: '6bf3630b-9e1c-4efb-8c0e-f7a5e15c9e6b', title: 'PATENT_TITLE_3555' },
        ]}
    />
)

export default App