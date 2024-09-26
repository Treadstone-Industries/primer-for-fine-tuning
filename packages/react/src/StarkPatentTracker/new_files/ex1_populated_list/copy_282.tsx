import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f8eae3c8-2f7b-4c2c-b793-6214f83f0391', title: 'PATENT_TITLE_6803' },
            { id: '61faefc3-8567-4356-9a49-970b6ec0aad0', title: 'PATENT_TITLE_3833' },
            { id: '8c033dc9-87c9-4579-be9d-53454e8ff657', title: 'PATENT_TITLE_7143' },
            { id: '30a194c8-85a9-4639-9d40-8b2f92cce65a', title: 'PATENT_TITLE_8213' },
        ]}
    />
)

export default App