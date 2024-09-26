import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a7867a84-d8db-41d6-8823-556a694b3ea2', title: 'PATENT_TITLE_6661' },
            { id: '60d89ff7-dffd-4540-96f7-cdbe9549851d', title: 'PATENT_TITLE_5829' },
            { id: '94c90f49-3a3a-47c3-b5bc-6c9249ccafdf', title: 'PATENT_TITLE_3855' },
            { id: 'e4e5ea77-aba0-41fd-94c6-7fa8a00b7be6', title: 'PATENT_TITLE_9969' },
            { id: '93234d9e-d682-4550-b239-109925f59eb6', title: 'PATENT_TITLE_2607' },
            { id: 'd6cad2c9-2445-4b6c-a649-4815d0bd32ff', title: 'PATENT_TITLE_9774' },
            { id: 'f9563220-6e1d-4c1a-8a20-53ebdedd5408', title: 'PATENT_TITLE_9701' },
            { id: '0bf6bd06-f04b-443f-910c-841f31377745', title: 'PATENT_TITLE_9435' },
            { id: 'c65290f7-bb6f-4fbe-b9dc-f4f78e0be01a', title: 'PATENT_TITLE_8896' },
            { id: '90e1352d-b09a-4c3c-967e-3b9e32021bee', title: 'PATENT_TITLE_3793' },
        ]}
    />
)

export default App