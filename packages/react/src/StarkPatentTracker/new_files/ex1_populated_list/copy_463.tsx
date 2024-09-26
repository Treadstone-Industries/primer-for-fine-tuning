import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cc18a249-0c26-45df-a1f1-0ad401dffd56', title: 'PATENT_TITLE_1310' },
            { id: '1929330d-84ed-4b0b-a683-2c371d3069d6', title: 'PATENT_TITLE_9256' },
            { id: 'f0cc4ff5-7ddf-4191-bf9c-11659049d209', title: 'PATENT_TITLE_9604' },
            { id: '6ae9f208-9bae-4844-9609-311c5c4cb0c0', title: 'PATENT_TITLE_9014' },
            { id: 'ab0f9e5f-a511-4d7d-b487-d58abb4a6fe6', title: 'PATENT_TITLE_2868' },
            { id: '788ff4ab-967e-4aff-96ea-e17301b97a0b', title: 'PATENT_TITLE_7892' },
            { id: '9cd9be4a-f4c3-4547-9cdf-55949a5c1c87', title: 'PATENT_TITLE_4093' },
            { id: '6237267d-f5ba-48a7-b13d-21c259ea8015', title: 'PATENT_TITLE_7154' },
            { id: '093cd112-ff4f-4dcc-91aa-4c03b8c6f14b', title: 'PATENT_TITLE_9885' },
        ]}
    />
)

export default App