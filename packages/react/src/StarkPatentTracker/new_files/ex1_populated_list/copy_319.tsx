import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4cd4aa59-d638-49f4-ac1d-ee6599c42372', title: 'PATENT_TITLE_6323' },
            { id: 'd24f2285-78a2-4e62-82f9-7e2ee6b5c538', title: 'PATENT_TITLE_4671' },
            { id: '676b44cb-a7fc-4686-a8c4-375e406a1504', title: 'PATENT_TITLE_9448' },
            { id: '3d7bd2a8-c67f-4ae8-82cd-b2afe29f9715', title: 'PATENT_TITLE_2127' },
            { id: 'd75bc03d-115c-4e55-98e5-e87d0ed32d69', title: 'PATENT_TITLE_2806' },
            { id: 'efd82b5c-f8a6-436c-a955-88bfbf645f8e', title: 'PATENT_TITLE_3370' },
        ]}
    />
)

export default App