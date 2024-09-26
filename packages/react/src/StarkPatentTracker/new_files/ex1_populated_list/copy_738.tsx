import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1fb1c328-18d2-43ad-b1ca-ba7fabfa9116', title: 'PATENT_TITLE_2311' },
            { id: '657ebc5a-6ea2-404e-9c9a-cf61262d0ffb', title: 'PATENT_TITLE_5721' },
            { id: '8ea804cf-3465-4f48-9a27-c6c0337ef083', title: 'PATENT_TITLE_2970' },
            { id: '17a06ab7-20c1-41de-9e38-66bbeda61a88', title: 'PATENT_TITLE_6180' },
            { id: 'bc517558-d470-4764-bc17-0a625a70857f', title: 'PATENT_TITLE_4416' },
            { id: '6fc873ef-4771-45f5-bbfc-a2b8b78e8598', title: 'PATENT_TITLE_3102' },
        ]}
    />
)

export default App