import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '143e2ba4-39a9-4d08-9f45-c69c8660ed61', title: 'PATENT_TITLE_3087' },
            { id: 'be2e23a8-3466-428d-b87f-3647c95fadc6', title: 'PATENT_TITLE_3756' },
            { id: '3f4e9c36-95d7-42e7-8bae-6ebd34a187e5', title: 'PATENT_TITLE_9650' },
            { id: '4abd7f10-66dd-4e58-aece-2d9cbb525f73', title: 'PATENT_TITLE_3579' },
            { id: 'aebcb1a0-cc92-423f-9605-97ef9e38f4fe', title: 'PATENT_TITLE_9247' },
            { id: '031ab62e-3ede-44d3-9f69-a425c8eaee84', title: 'PATENT_TITLE_4330' },
            { id: '81e2eba2-d753-4a0c-8a2b-4a041910f90c', title: 'PATENT_TITLE_5793' },
            { id: '8a1b6c43-6ce1-44a1-bac9-e7a3f364344b', title: 'PATENT_TITLE_3883' },
            { id: 'dbce2207-00cb-4911-bd7a-44b4c30782c7', title: 'PATENT_TITLE_5426' },
            { id: '2d07f961-18fc-42c6-b38f-429dd9ad5a5f', title: 'PATENT_TITLE_3328' },
        ]}
    />
)

export default App