import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'deb58a31-559c-4d5f-8a7e-c8c2bab2ffef', title: 'PATENT_TITLE_2953' },
            { id: '2a3bd7a4-5b57-45fe-9f1f-345c25c92590', title: 'PATENT_TITLE_4803' },
            { id: '06c75f28-b85b-4da0-baf0-bbbb95d73ca2', title: 'PATENT_TITLE_9040' },
            { id: 'f074518d-2b5b-4064-b2cf-991fe6836eb7', title: 'PATENT_TITLE_1336' },
            { id: '69f41946-7547-449c-81fe-04af1e23432f', title: 'PATENT_TITLE_4661' },
            { id: 'aa0c2716-c382-4d9f-83e0-8a91b3e3c54b', title: 'PATENT_TITLE_5699' },
            { id: '2d38840b-1119-40ee-b87b-f9d347f39e92', title: 'PATENT_TITLE_5003' },
        ]}
    />
)

export default App