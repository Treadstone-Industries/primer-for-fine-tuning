import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8b4578a5-5f58-4b1b-90db-616415f0ce98', title: 'PATENT_TITLE_5605' },
            { id: 'f131ecd6-a178-42f3-8491-6c083ae78445', title: 'PATENT_TITLE_8020' },
            { id: '19387e0e-2a29-4c38-b4d7-5d5730fe8898', title: 'PATENT_TITLE_3217' },
            { id: 'a0efa77d-4787-4fc3-9cc7-3570d83ee202', title: 'PATENT_TITLE_4240' },
            { id: 'bef5757d-2104-4038-b6a9-24295da0bec6', title: 'PATENT_TITLE_3559' },
            { id: '698dc1d4-9231-43b1-b176-a4902c781821', title: 'PATENT_TITLE_6425' },
            { id: '7d2df6c3-a9c3-4498-8002-af47ac29a4c1', title: 'PATENT_TITLE_6043' },
            { id: 'ad77422f-0012-4771-993e-647f541c743c', title: 'PATENT_TITLE_2045' },
            { id: '1e432476-71bc-4d13-9eb8-eb2e34cf4f97', title: 'PATENT_TITLE_5793' },
            { id: '179d71ea-392c-4c32-a78f-c66c1d15babb', title: 'PATENT_TITLE_6043' },
        ]}
    />
)

export default App