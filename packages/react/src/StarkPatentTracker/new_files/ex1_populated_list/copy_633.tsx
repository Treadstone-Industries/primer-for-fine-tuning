import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '777e4b09-8a00-4236-8498-d0449a17f2b6', title: 'PATENT_TITLE_2509' },
            { id: '0fb58449-7eb0-4638-b0fd-2c9f25ca10e8', title: 'PATENT_TITLE_5648' },
            { id: '3996894b-1177-4cb2-80b6-69a3bc80dc73', title: 'PATENT_TITLE_1398' },
            { id: '6abc41e9-2454-463c-b220-c74120d26d60', title: 'PATENT_TITLE_5585' },
            { id: 'a7674d34-152f-48c1-9613-a7d5bd0bcd5d', title: 'PATENT_TITLE_1669' },
            { id: 'b9b348aa-5f41-4885-a5a2-a0b839e48a7c', title: 'PATENT_TITLE_6370' },
            { id: '5fbe5adb-280a-424d-be75-ef6ac25e017a', title: 'PATENT_TITLE_6610' },
            { id: '43c100e9-82b0-4394-9507-a535bf4cabd8', title: 'PATENT_TITLE_4138' },
        ]}
    />
)

export default App