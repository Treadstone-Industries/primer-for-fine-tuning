import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4e245772-923b-4c2c-8e5b-566b927d5ec8', title: 'PATENT_TITLE_7085' },
            { id: '331eae98-bd09-482d-8799-081102cb9805', title: 'PATENT_TITLE_4019' },
            { id: '5af26cf5-49ba-4d91-8ffe-2d743893b6e8', title: 'PATENT_TITLE_9239' },
            { id: 'e987e2f5-764c-4672-bfc8-31f3673f38a5', title: 'PATENT_TITLE_1560' },
            { id: 'e6742d4d-415b-4769-b5ce-973d6d8541a6', title: 'PATENT_TITLE_1971' },
            { id: '07cb6eaf-d086-44e7-8452-4a47986020df', title: 'PATENT_TITLE_8243' },
            { id: 'db61777c-baac-46df-ada0-436a1f019c58', title: 'PATENT_TITLE_3811' },
            { id: 'fcf1f464-e004-4191-a500-8a90b825dcad', title: 'PATENT_TITLE_4231' },
            { id: '3f484012-7530-4e1b-b5a2-d979b8cf7e6b', title: 'PATENT_TITLE_8814' },
        ]}
    />
)

export default App