import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ddcb2844-00a9-4a5d-9c38-e494a0984041', title: 'PATENT_TITLE_9498' },
            { id: '6093efaf-4219-432d-ac01-0791d279af4a', title: 'PATENT_TITLE_8799' },
            { id: '422c2539-b668-4627-ba5b-f00c4d834cdb', title: 'PATENT_TITLE_7020' },
            { id: '39d60c1c-9eb5-49ab-b58c-70ac7c874881', title: 'PATENT_TITLE_1299' },
            { id: 'b54bfb16-aa2e-4d90-aa0d-5c5555cd25fc', title: 'PATENT_TITLE_2357' },
            { id: '22c5bf15-f6c2-4a75-9f39-6d67b2032c63', title: 'PATENT_TITLE_3367' },
            { id: '022596d1-8404-4aea-b732-bd342c8ea95b', title: 'PATENT_TITLE_4417' },
        ]}
    />
)

export default App