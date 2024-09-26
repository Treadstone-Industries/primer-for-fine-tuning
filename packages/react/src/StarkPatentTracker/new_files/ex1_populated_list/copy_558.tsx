import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1f42bf24-f702-4149-bd21-df885e8ebbff', title: 'PATENT_TITLE_8861' },
            { id: '62b4a219-2183-4222-be9f-0fa7cd9863ca', title: 'PATENT_TITLE_3796' },
            { id: 'd8b95ba3-2155-4c29-bd9d-eaca15161379', title: 'PATENT_TITLE_6558' },
            { id: 'b3d1a21b-6fff-467e-98b5-cc90877f8577', title: 'PATENT_TITLE_6249' },
            { id: '5b32d1ca-1837-4745-8ce6-f728171b3310', title: 'PATENT_TITLE_5143' },
            { id: '8050d203-0719-4275-9586-112ead545bc3', title: 'PATENT_TITLE_5747' },
        ]}
    />
)

export default App