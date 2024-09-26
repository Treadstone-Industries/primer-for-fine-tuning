import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ed0b3825-011e-46ec-8f28-a7434ab1acc1', title: 'PATENT_TITLE_4849' },
            { id: '664a7c93-19e4-4c4e-8b0e-77a7027df9c2', title: 'PATENT_TITLE_3375' },
            { id: '73ba2787-2956-4f70-ac96-b53d69d89a8e', title: 'PATENT_TITLE_2061' },
            { id: 'fbf5661c-9913-4c55-abc6-f414b733df29', title: 'PATENT_TITLE_6629' },
            { id: '7462715a-615e-4ae2-9cd4-222577927041', title: 'PATENT_TITLE_9531' },
            { id: '5a561f94-4f16-4a6f-a00b-618c5b62426e', title: 'PATENT_TITLE_7877' },
            { id: '515c88b0-7063-480b-b280-4e9f75559858', title: 'PATENT_TITLE_6349' },
            { id: '8f2606f2-ddf8-4642-a3f5-d86003765a32', title: 'PATENT_TITLE_3771' },
            { id: '1d9dd606-3b5a-4f9e-b1f7-c7e0f7e079e7', title: 'PATENT_TITLE_3175' },
        ]}
    />
)

export default App