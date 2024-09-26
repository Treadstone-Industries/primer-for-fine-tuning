import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9b8e17a3-8bbf-4900-bf77-403eb3541b19', title: 'PATENT_TITLE_7244' },
            { id: '8ca9027d-41d3-4b7b-81cb-53e2b5387252', title: 'PATENT_TITLE_7552' },
            { id: '4b749a3b-ceec-4ab1-94c8-553214442505', title: 'PATENT_TITLE_8241' },
            { id: '07a4196e-8e2f-4554-bf15-f0a7fb859a86', title: 'PATENT_TITLE_4596' },
            { id: '67a20f45-63e9-4f98-af69-91fd4c26e7d6', title: 'PATENT_TITLE_8066' },
            { id: '5713ed97-f5eb-4a24-8f80-9621246c0412', title: 'PATENT_TITLE_6338' },
        ]}
    />
)

export default App