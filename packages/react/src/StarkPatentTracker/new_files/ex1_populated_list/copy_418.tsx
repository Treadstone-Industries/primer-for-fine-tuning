import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3da11794-ae47-4fcf-b2c1-69c0074993bf', title: 'PATENT_TITLE_9703' },
            { id: '5a31c62f-33ae-44a2-a78d-9379a8d3d942', title: 'PATENT_TITLE_4645' },
            { id: 'c6aa5468-75ab-4077-ad27-cb830580a58b', title: 'PATENT_TITLE_5790' },
            { id: '4f753c59-7e8b-4679-9975-7b7a6cc23d87', title: 'PATENT_TITLE_1653' },
            { id: '0b41d9a3-1ee4-490f-8fc1-a868f4269f3b', title: 'PATENT_TITLE_2367' },
            { id: 'f40c3f39-eb5a-42a2-b683-75e547305dcf', title: 'PATENT_TITLE_7466' },
            { id: '85bec183-4ca9-45f9-94e3-800daddc29e0', title: 'PATENT_TITLE_5436' },
            { id: '089d1282-ecd9-45fa-9bb3-bd3a1821aaa6', title: 'PATENT_TITLE_9937' },
            { id: 'cbf4cbe5-aa86-490a-87c8-b6cbe2564b75', title: 'PATENT_TITLE_1447' },
            { id: 'b275cd1e-4b89-4b9e-93d5-782dad26b5e7', title: 'PATENT_TITLE_6290' },
        ]}
    />
)

export default App