import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c633d32d-bd93-4df5-a631-d8434eb27ead', title: 'PATENT_TITLE_5138' },
            { id: '495773c5-6edd-4b81-bd62-3018e71096ae', title: 'PATENT_TITLE_2079' },
            { id: '8d140cdd-ff4d-4e4c-8417-e390ef432d7e', title: 'PATENT_TITLE_3260' },
            { id: '6ea8d84c-eee0-4484-868a-0cd8038fa825', title: 'PATENT_TITLE_5025' },
        ]}
    />
)

export default App