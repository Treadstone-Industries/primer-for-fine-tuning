import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '28fed8a1-bf53-4e01-ba34-22f62cddcf10', title: 'PATENT_TITLE_7422' },
            { id: 'da5e06b3-75a9-467a-b7d6-eb01110deab3', title: 'PATENT_TITLE_9543' },
            { id: '85573084-9382-45be-ac09-67dbc2364b82', title: 'PATENT_TITLE_7156' },
            { id: '25e47fcd-04d9-4c89-a570-11b0f3ae7522', title: 'PATENT_TITLE_5094' },
            { id: '7b6c2acf-1295-4a78-b74e-ac4700e5fde5', title: 'PATENT_TITLE_7202' },
            { id: '121f0f13-ce43-41eb-b978-17f4ca58f8f6', title: 'PATENT_TITLE_5760' },
            { id: '9d4ee6c2-d3c4-4592-a36f-0e6e7fb2506d', title: 'PATENT_TITLE_7754' },
            { id: 'a57db7ec-0219-4e92-a081-4c3187731eab', title: 'PATENT_TITLE_6923' },
            { id: '7b9fac52-9d02-4f4a-8572-82a374bfe166', title: 'PATENT_TITLE_4701' },
        ]}
    />
)

export default App