import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5c6ffa6c-1a5f-412e-80c2-13da328b89bc', title: 'PATENT_TITLE_2604' },
            { id: '64e8b798-dcf9-4a56-92f5-b7586d8b880b', title: 'PATENT_TITLE_3500' },
            { id: '422cce7a-6952-400b-a81e-9fccce47bf8a', title: 'PATENT_TITLE_6286' },
            { id: '97437652-c60a-45b9-8ce9-6e93087bede2', title: 'PATENT_TITLE_2171' },
            { id: 'beec0699-023a-4722-8166-dae76c2f1c0c', title: 'PATENT_TITLE_2467' },
            { id: 'e966e28a-3c59-4849-85ae-7d780ed86b42', title: 'PATENT_TITLE_8496' },
        ]}
    />
)

export default App