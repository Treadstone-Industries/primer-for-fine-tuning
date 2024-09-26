import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '45cd5834-056c-4566-9cda-468a0f55ff90', title: 'PATENT_TITLE_5308' },
            { id: 'bf22f802-4511-4169-9428-b6fd4e7281c6', title: 'PATENT_TITLE_5223' },
            { id: '320570d5-ed74-4a9d-9a53-73ef6e64de79', title: 'PATENT_TITLE_9206' },
            { id: '7cc1e8b9-e0cb-4d38-a78d-e7f374ac8546', title: 'PATENT_TITLE_1157' },
            { id: '5c3e76d7-ca12-48ae-9d75-2d645ab8dade', title: 'PATENT_TITLE_5306' },
            { id: 'ef06eeef-d4f1-47e8-97c8-5b3b4ffc909c', title: 'PATENT_TITLE_3149' },
            { id: '16c8c657-70f5-4f10-aa7b-75b86d7523f7', title: 'PATENT_TITLE_3319' },
        ]}
    />
)

export default App