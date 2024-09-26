import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a60833ce-3878-4a1f-9e74-54b331fc38f2', title: 'PATENT_TITLE_2075' },
            { id: 'e3c31a35-a9a7-46c0-b76d-21d478715f8d', title: 'PATENT_TITLE_6148' },
            { id: 'c7fe0870-abfb-4a97-bf79-685f56f6d5a3', title: 'PATENT_TITLE_5867' },
            { id: '830c2e4f-be04-4c92-a205-9d799cf49668', title: 'PATENT_TITLE_6106' },
            { id: '689dbe4e-0ca0-4e2b-bf28-388b0fef6e7e', title: 'PATENT_TITLE_5488' },
            { id: '39bc7ee1-2ff2-427b-b9f3-469944f483d9', title: 'PATENT_TITLE_1700' },
            { id: '342e730a-2334-44a5-ae91-7d18a6108e26', title: 'PATENT_TITLE_3772' },
        ]}
    />
)

export default App