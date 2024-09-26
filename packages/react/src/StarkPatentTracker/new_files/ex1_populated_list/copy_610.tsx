import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2883a22c-849d-45c3-a491-f7cb5526e8c1', title: 'PATENT_TITLE_8223' },
            { id: '7c32488b-aaea-4cac-aa8d-8c8bc792a278', title: 'PATENT_TITLE_6127' },
            { id: 'bbfb9919-6b30-49fd-a32f-75f170331785', title: 'PATENT_TITLE_9156' },
            { id: 'aa9965ba-83f1-4848-8eb9-d96103cf9c52', title: 'PATENT_TITLE_5054' },
            { id: 'c17f9f42-08b5-470f-8902-7417e59d4028', title: 'PATENT_TITLE_6179' },
            { id: 'fafabc46-052e-4e31-9853-51aaf2669eaa', title: 'PATENT_TITLE_1467' },
        ]}
    />
)

export default App