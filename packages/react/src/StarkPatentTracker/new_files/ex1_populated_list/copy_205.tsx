import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '59af7f16-566b-4aeb-b278-5b96759043c1', title: 'PATENT_TITLE_4869' },
            { id: '3be71fc0-eb45-4158-b099-221c92c6da46', title: 'PATENT_TITLE_1006' },
            { id: '5e32f671-371f-498a-969b-ea05af5b075c', title: 'PATENT_TITLE_1942' },
            { id: '39cc3efc-84ee-4484-ab8a-66e29d447e05', title: 'PATENT_TITLE_5974' },
            { id: '737f9a03-f530-4c20-a4c5-cdec99bb4c00', title: 'PATENT_TITLE_4923' },
            { id: '536a4657-667b-492c-a73a-ce0e4410821b', title: 'PATENT_TITLE_1345' },
            { id: 'b4ce6c2f-2395-4973-9a16-45d67020f34c', title: 'PATENT_TITLE_1005' },
        ]}
    />
)

export default App