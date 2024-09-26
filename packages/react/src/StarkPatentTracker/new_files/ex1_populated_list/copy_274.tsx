import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '124d0892-618f-4ab2-b76e-08303bd193ad', title: 'PATENT_TITLE_8651' },
            { id: '5424f861-567d-4faa-8109-ab05b3487de6', title: 'PATENT_TITLE_7484' },
            { id: 'dad48b4a-f731-4a3d-bc9e-a10a9465d791', title: 'PATENT_TITLE_3267' },
            { id: 'a2c70c72-eb04-4dc6-a044-91e8abae6389', title: 'PATENT_TITLE_8190' },
            { id: '340504f2-ffd6-4032-bc5e-5dbcb8e3d0d0', title: 'PATENT_TITLE_7987' },
            { id: '38a8c76d-912c-4ba6-adbb-9639a09421ac', title: 'PATENT_TITLE_9766' },
            { id: '7992e612-0266-41ca-af86-68a6104c4ba4', title: 'PATENT_TITLE_4929' },
        ]}
    />
)

export default App