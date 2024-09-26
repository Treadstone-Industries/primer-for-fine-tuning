import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6695bade-b80b-4298-936b-19f39f90c139', title: 'PATENT_TITLE_9798' },
            { id: '62c2467a-b0c6-4c90-94c9-8b5ab01d7bef', title: 'PATENT_TITLE_9997' },
            { id: '7b519137-0cc1-44f2-b0da-10478eda27d1', title: 'PATENT_TITLE_9223' },
            { id: 'a1138e8c-3d07-4111-9767-3710d6e69efd', title: 'PATENT_TITLE_1028' },
            { id: '4e23e87c-c172-43a5-b306-0ee00f1e640d', title: 'PATENT_TITLE_5302' },
            { id: 'ef2f3e6c-84cd-4364-93ca-bfbaa965b7d9', title: 'PATENT_TITLE_7569' },
            { id: '16d6fc3c-6cc5-4f21-934d-9f0b9a9f6e89', title: 'PATENT_TITLE_3903' },
        ]}
    />
)

export default App