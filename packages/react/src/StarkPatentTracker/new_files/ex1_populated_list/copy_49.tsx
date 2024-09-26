import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '451385ae-3d01-4262-9f1c-f634ec56b2d7', title: 'PATENT_TITLE_3246' },
            { id: '5caaa978-99ee-4954-b571-48aebcdb655f', title: 'PATENT_TITLE_9293' },
            { id: '8649a1f8-0a7e-4741-ba65-6b7b0d19fc8b', title: 'PATENT_TITLE_9941' },
            { id: 'bd2397ba-d725-4dc0-8c39-a7d02921aba0', title: 'PATENT_TITLE_8539' },
            { id: 'f474f33f-a732-4dc0-b738-a16266ce4ed3', title: 'PATENT_TITLE_7428' },
            { id: '443eb89c-b728-4000-95df-c5692da34228', title: 'PATENT_TITLE_9287' },
            { id: '0e43a33e-ec28-4e31-87e9-0a8e39f898e9', title: 'PATENT_TITLE_7348' },
        ]}
    />
)

export default App