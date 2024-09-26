import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8f548857-8a5f-4c3b-a05f-d68596312303', title: 'PATENT_TITLE_4513' },
            { id: '1e3732dc-91f6-432d-952b-87854d5a4c8d', title: 'PATENT_TITLE_1872' },
            { id: '95a0024b-a362-41d5-93c0-4be6d565332b', title: 'PATENT_TITLE_5280' },
            { id: '142ba4a3-d13e-4e58-b821-3780c1863cfb', title: 'PATENT_TITLE_4055' },
            { id: '26a67c9f-0746-4eef-8edc-b148c6d51e3a', title: 'PATENT_TITLE_8713' },
            { id: 'f7efd2f1-71f8-4447-9e91-393849456ac5', title: 'PATENT_TITLE_2576' },
            { id: '84063fd2-32c0-4a66-8d9d-9d6840f30fab', title: 'PATENT_TITLE_8083' },
            { id: 'da3e3227-c90a-41dd-9877-dbfaad67ddd2', title: 'PATENT_TITLE_6913' },
            { id: '06003338-e797-4ef8-ab48-2a037ce29bae', title: 'PATENT_TITLE_6752' },
            { id: 'be18c363-6182-4fe2-9f38-083ef829d72e', title: 'PATENT_TITLE_9624' },
        ]}
    />
)

export default App