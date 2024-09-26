import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b0d0a8c4-47df-4c63-ab6b-62dc9a83abf5', title: 'PATENT_TITLE_1802' },
            { id: '0208b7cc-36b7-4167-8136-d523f718fef1', title: 'PATENT_TITLE_3567' },
            { id: 'fb06af02-cfee-4089-af2f-095eac828f67', title: 'PATENT_TITLE_6600' },
            { id: '683187dc-e49e-45e3-b6f1-726627b5de42', title: 'PATENT_TITLE_1554' },
            { id: 'a7b6d70a-00a3-4d35-af15-95a508003f36', title: 'PATENT_TITLE_1258' },
            { id: 'c524d8a3-6e12-4f91-8188-e6da86f25373', title: 'PATENT_TITLE_9034' },
            { id: '70976991-be25-43d4-a47e-9959d5be8007', title: 'PATENT_TITLE_2070' },
            { id: 'b03dd172-7473-4274-bb29-3b6775631815', title: 'PATENT_TITLE_1117' },
            { id: '4b5fb561-a09e-4408-8829-d7527ad192ea', title: 'PATENT_TITLE_5797' },
            { id: '4197d4e9-014d-4d4c-a9a8-22d51aeddb12', title: 'PATENT_TITLE_7041' },
        ]}
    />
)

export default App