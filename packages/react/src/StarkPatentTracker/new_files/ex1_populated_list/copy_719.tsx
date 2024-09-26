import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '7c224402-cf40-45fa-878d-d4905f596a59', title: 'PATENT_TITLE_5576' },
            { id: '9f93042f-ecb1-4c49-88eb-e54b9176b654', title: 'PATENT_TITLE_2071' },
            { id: 'e473be0c-1f9d-45cd-b535-bdefece7414e', title: 'PATENT_TITLE_7958' },
            { id: '4851d634-96ec-43ca-b95b-d9449c79096b', title: 'PATENT_TITLE_6547' },
            { id: '6db9ac99-c616-4477-9b6b-252fbeac40f4', title: 'PATENT_TITLE_9930' },
            { id: '10b9862b-496b-45c4-bc0d-c7ab6cab121b', title: 'PATENT_TITLE_9435' },
            { id: '80f7ced3-2740-411f-a896-f80ffe2ff41f', title: 'PATENT_TITLE_3207' },
            { id: '5d972f5f-4c96-4f66-a496-584c68c37d6f', title: 'PATENT_TITLE_3366' },
            { id: '9c452644-6fc3-4cbc-b5ec-51ab4e687167', title: 'PATENT_TITLE_6828' },
            { id: 'ba2e66e9-42d8-4eec-b92a-dbe2b177d32b', title: 'PATENT_TITLE_4826' },
        ]}
    />
)

export default App