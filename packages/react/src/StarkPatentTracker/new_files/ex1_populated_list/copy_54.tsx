import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'da3a447a-a18a-4cbe-ba9a-6b76a6692b31', title: 'PATENT_TITLE_5387' },
            { id: '74c0464b-02fc-4ea6-b995-6cfcca86d2ab', title: 'PATENT_TITLE_2529' },
            { id: '3190bd67-d846-46fb-af78-751695b3f270', title: 'PATENT_TITLE_5198' },
            { id: '38429308-d190-45c7-b8c6-1c284a6263bc', title: 'PATENT_TITLE_4430' },
            { id: '9d82477b-9bac-41f1-a2dc-ab2300994db0', title: 'PATENT_TITLE_8349' },
            { id: 'abf37c9d-6b4e-48dd-8c24-a0e96ee4eced', title: 'PATENT_TITLE_8799' },
            { id: 'c9b48073-4595-43f6-b56f-73ff3765d326', title: 'PATENT_TITLE_8405' },
            { id: 'b7959341-cb10-4f6f-ac53-192902a887a9', title: 'PATENT_TITLE_9875' },
        ]}
    />
)

export default App