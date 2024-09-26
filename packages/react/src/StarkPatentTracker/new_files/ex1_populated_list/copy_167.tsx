import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bb723589-1a25-4563-b269-1234396bb743', title: 'PATENT_TITLE_6210' },
            { id: '76d35a69-dd1f-4fc6-8bee-4286085a74fb', title: 'PATENT_TITLE_1859' },
            { id: '7f684dd2-bd15-403a-a181-4c8975aaa9b9', title: 'PATENT_TITLE_2007' },
        ]}
    />
)

export default App