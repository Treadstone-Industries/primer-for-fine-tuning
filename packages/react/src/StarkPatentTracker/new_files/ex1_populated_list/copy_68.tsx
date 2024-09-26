import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '521fc9c8-1b20-45fd-bb30-831dec75a900', title: 'PATENT_TITLE_3173' },
            { id: 'fc0e34e2-ac82-4174-8d2d-4fc1f4b5b277', title: 'PATENT_TITLE_4262' },
            { id: '3434d6e3-9d40-427a-9d28-806b1a4991b9', title: 'PATENT_TITLE_5246' },
            { id: '2b427fbd-609d-46ef-9cd9-12fca4ff1131', title: 'PATENT_TITLE_8381' },
            { id: '0143e678-a7d3-45d2-a9d8-bb2d52952edf', title: 'PATENT_TITLE_8559' },
            { id: '259da3e6-557b-4452-828a-19e1e3b4f456', title: 'PATENT_TITLE_3044' },
            { id: '45963bc7-0298-496e-8100-dfd27e0efb38', title: 'PATENT_TITLE_5629' },
            { id: '19b52f81-7a9e-484a-9fe9-895ca34e8935', title: 'PATENT_TITLE_8666' },
            { id: '827ff7d5-6d55-4d0b-b615-a86607c226ea', title: 'PATENT_TITLE_6072' },
        ]}
    />
)

export default App