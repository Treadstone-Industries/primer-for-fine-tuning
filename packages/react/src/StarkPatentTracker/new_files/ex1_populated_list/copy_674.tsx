import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b98eba46-598e-4d0f-87cf-afbda714ffce', title: 'PATENT_TITLE_7608' },
            { id: 'a0fada95-2e31-48d2-b5e2-58aa72f93737', title: 'PATENT_TITLE_6584' },
            { id: 'dbd79b65-7f98-48d1-bd4f-14691e5cec67', title: 'PATENT_TITLE_4865' },
        ]}
    />
)

export default App