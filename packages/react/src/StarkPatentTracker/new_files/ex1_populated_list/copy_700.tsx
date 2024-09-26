import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '55406a1e-f1f5-45e8-8b22-bbc735f2ec0a', title: 'PATENT_TITLE_1693' },
            { id: 'c99be9b5-1ae4-4e78-91be-3ca8e37b6c71', title: 'PATENT_TITLE_8532' },
            { id: 'd996d47a-05a3-471f-a511-4b218a5abcbc', title: 'PATENT_TITLE_9452' },
            { id: '1085fd11-3881-4807-9147-2a5ce82ba216', title: 'PATENT_TITLE_2406' },
            { id: '0b36d541-6d1f-4866-ba08-0603cedc2f2f', title: 'PATENT_TITLE_3030' },
            { id: '3ca93e4b-68b6-4f8f-b9ee-807ce0517288', title: 'PATENT_TITLE_5292' },
            { id: '8b7c7eb0-2d85-4c6a-9a93-6507f4fb4190', title: 'PATENT_TITLE_5683' },
            { id: '8356a2f5-fcdc-42b9-ad83-3e548de3cf56', title: 'PATENT_TITLE_6624' },
            { id: '55c7f863-7aa6-4c65-8441-c4cadcf1105c', title: 'PATENT_TITLE_9221' },
        ]}
    />
)

export default App