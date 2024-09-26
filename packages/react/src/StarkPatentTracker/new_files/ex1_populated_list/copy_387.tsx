import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1059ee65-3bef-49ed-8e53-4c2c504d5750', title: 'PATENT_TITLE_4828' },
            { id: 'f8fdcb64-4d2c-424b-8c5d-ea705edf60cc', title: 'PATENT_TITLE_8352' },
            { id: '39977dd8-27f9-4c46-bffc-5a4f24198f07', title: 'PATENT_TITLE_6651' },
            { id: '7d7f9ad4-9cc7-413a-99ed-586c4c41b1e2', title: 'PATENT_TITLE_7555' },
            { id: '907e61f9-10b0-4028-bab1-9f8f5de13a13', title: 'PATENT_TITLE_2566' },
        ]}
    />
)

export default App