import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0634a11f-4d4d-4bc5-998d-6a0229382c40', title: 'PATENT_TITLE_5266' },
            { id: '50b5449b-334a-4089-96e4-eec9d7d46207', title: 'PATENT_TITLE_5138' },
            { id: '2f3b8d86-1b28-4156-abfe-e5b422874e6c', title: 'PATENT_TITLE_3500' },
        ]}
    />
)

export default App