import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b43f8463-9046-4460-9016-0ce9821a91f5', title: 'PATENT_TITLE_9578' },
            { id: '384d9837-4c98-49a4-a17b-7e5ef03be0b2', title: 'PATENT_TITLE_2057' },
            { id: 'e2c6fe8a-e9fa-4fbe-b2e8-2b621b854491', title: 'PATENT_TITLE_5889' },
            { id: '0b5606d9-f396-4d3b-ad0f-fc73911dd287', title: 'PATENT_TITLE_3880' },
            { id: 'c136f9b2-bcf9-4096-a977-47897484da01', title: 'PATENT_TITLE_8902' },
            { id: '9e1a780b-3692-4cbe-a47a-53c6a0ad764c', title: 'PATENT_TITLE_9748' },
            { id: '3252e2f3-16cb-4f77-9278-e8c5b902de86', title: 'PATENT_TITLE_5144' },
        ]}
    />
)

export default App