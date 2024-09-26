import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fbcbb7d0-841d-44e3-8633-6868e79728e3', title: 'PATENT_TITLE_6242' },
            { id: 'be2003db-dbf2-441d-b11e-f3e2dc99cf62', title: 'PATENT_TITLE_1084' },
            { id: '47736f48-7fd4-4a82-848e-e11cc00d82c5', title: 'PATENT_TITLE_6769' },
            { id: 'c4360951-64f8-4a6f-bbcc-b2fc8dc99e13', title: 'PATENT_TITLE_7536' },
            { id: '33e7f2aa-2383-4a79-9a7b-af8269d4f642', title: 'PATENT_TITLE_4931' },
            { id: 'b47f0965-1d2e-4509-9aac-34a84aa57360', title: 'PATENT_TITLE_9246' },
            { id: '9ff89ce8-3745-4551-afbd-93bcb34a4c23', title: 'PATENT_TITLE_2859' },
            { id: '05b1bba0-9d68-49cd-9c0e-5951b73e31ca', title: 'PATENT_TITLE_3403' },
        ]}
    />
)

export default App