import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2865ba93-36c9-4878-8f78-5f79f8526d22', title: 'PATENT_TITLE_2990' },
            { id: '3a85c91f-7e68-4d06-8ce3-26c485e75a67', title: 'PATENT_TITLE_3542' },
            { id: '02aa78eb-9420-4f37-a572-2345dd5a1023', title: 'PATENT_TITLE_6637' },
            { id: '193de247-9ddc-4ba6-8457-440cbe0b5026', title: 'PATENT_TITLE_7153' },
            { id: '377db01f-f6c0-457c-a4d9-fd7c40856aa8', title: 'PATENT_TITLE_5786' },
            { id: '895f031e-73d4-44cc-841a-74004086adf5', title: 'PATENT_TITLE_8989' },
        ]}
    />
)

export default App