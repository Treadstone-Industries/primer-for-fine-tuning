import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8e309566-8b58-4355-b808-a486de98e40d', title: 'PATENT_TITLE_1197' },
            { id: 'aa408b08-8309-44d5-8434-d4da46dbce0a', title: 'PATENT_TITLE_2085' },
            { id: 'b16f367b-2d04-4137-9f3e-2ee9935f25b4', title: 'PATENT_TITLE_6017' },
            { id: '93b2b5e5-fb7a-4beb-ae9a-1a145288abeb', title: 'PATENT_TITLE_6489' },
            { id: '249029f1-bcf8-42fc-868f-256108d84863', title: 'PATENT_TITLE_3508' },
            { id: '4e4b2a97-8ea8-4543-b2a9-95533a9929c5', title: 'PATENT_TITLE_5114' },
            { id: 'a71795c9-599b-4f43-b1f4-e94666e83780', title: 'PATENT_TITLE_1647' },
            { id: 'f3c29ebb-91a7-4845-8330-475584846b23', title: 'PATENT_TITLE_7861' },
            { id: '35e6fb53-97fc-46c2-8bd7-889e645a518d', title: 'PATENT_TITLE_9890' },
            { id: '98d6a764-66ec-4ee7-a854-707a549ddfd1', title: 'PATENT_TITLE_1644' },
        ]}
    />
)

export default App