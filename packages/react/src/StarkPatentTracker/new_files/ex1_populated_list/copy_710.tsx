import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7224c079-22f1-4098-9f6f-d0eca91c2aad', title: 'PATENT_TITLE_5859' },
            { id: '49f32d8a-885a-465c-b663-8bef23dc995c', title: 'PATENT_TITLE_5503' },
            { id: '17f32cb2-2cb1-4d37-a4ef-50acce1ed4d6', title: 'PATENT_TITLE_1425' },
            { id: 'edf0a344-b6ec-474a-81c5-ab56311eee50', title: 'PATENT_TITLE_3503' },
            { id: '0dd95546-d5ec-4962-ad41-08505be1e89c', title: 'PATENT_TITLE_9905' },
            { id: '790b98f1-faf4-4d16-a0ff-b92353db20bc', title: 'PATENT_TITLE_5792' },
        ]}
    />
)

export default App