import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3d0ec312-ad5c-4a17-a076-de33d9ef0eb1', title: 'PATENT_TITLE_9001' },
            { id: 'a0a4e4c7-093d-49bd-997c-4400ea513f96', title: 'PATENT_TITLE_3320' },
            { id: '1fd04816-1d68-4308-ad15-160191836a7b', title: 'PATENT_TITLE_7917' },
            { id: 'a0b17d9a-197f-4ed6-841c-5e083fbbe020', title: 'PATENT_TITLE_5771' },
            { id: '6cc2a684-d326-47b6-8690-12983da91e16', title: 'PATENT_TITLE_9008' },
            { id: '62f9ded1-b095-4d94-bcc1-f362b5644017', title: 'PATENT_TITLE_2657' },
            { id: '3bb28dee-4d37-4434-b8ea-b515a3819c54', title: 'PATENT_TITLE_7336' },
            { id: '9575a2c3-c79f-408a-811d-3fbe2019c253', title: 'PATENT_TITLE_5884' },
        ]}
    />
)

export default App