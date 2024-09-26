import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8b7ab598-6cb0-496b-a6de-5fdff6051995', title: 'PATENT_TITLE_5942' },
            { id: '65b79e27-04b6-4e17-8e63-98ca13b4e03a', title: 'PATENT_TITLE_8228' },
            { id: '2984564c-3910-43dd-b414-1924d6cc40cd', title: 'PATENT_TITLE_7155' },
            { id: '67c0933b-ae36-4446-b191-b698a86630d8', title: 'PATENT_TITLE_9619' },
        ]}
    />
)

export default App