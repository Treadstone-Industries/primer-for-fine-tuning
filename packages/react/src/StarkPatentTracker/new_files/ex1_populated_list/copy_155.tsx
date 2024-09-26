import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '1b404d2b-0948-4543-b900-c8b28fdb9c53', title: 'PATENT_TITLE_8645' },
            { id: 'e29533fb-05c6-4017-bbca-7d5af45ffef3', title: 'PATENT_TITLE_7522' },
            { id: '95186666-11b8-4272-b0ca-7289a444b401', title: 'PATENT_TITLE_7713' },
            { id: 'd9450560-5c65-4068-9e57-4c38c51b26e7', title: 'PATENT_TITLE_2305' },
            { id: 'e6719f58-1852-46d9-84b9-2579f7fe2f1c', title: 'PATENT_TITLE_6813' },
            { id: '3a583728-7ebf-4c53-9261-22baa8183723', title: 'PATENT_TITLE_3592' },
            { id: '50bef1bb-68e6-4475-82ef-ec51c3a41098', title: 'PATENT_TITLE_7875' },
            { id: 'd83f40dc-df0a-4c05-a3e7-e8f8488fc2c4', title: 'PATENT_TITLE_3283' },
        ]}
    />
)

export default App