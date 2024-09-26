import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7b54fadc-118d-4931-91ac-a49624c84170', title: 'PATENT_TITLE_1712' },
            { id: '115bb0a3-6887-469b-a6b5-cf2011447a2a', title: 'PATENT_TITLE_6493' },
            { id: 'a4fafb3b-1aa5-4d3b-b227-286f16a69aaf', title: 'PATENT_TITLE_6164' },
            { id: 'bee96dc0-e7a1-40cf-95ce-ebf7c085a897', title: 'PATENT_TITLE_1722' },
        ]}
    />
)

export default App