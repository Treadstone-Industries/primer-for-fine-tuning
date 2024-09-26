import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ec102019-513d-4863-bdb9-4ff44354d6a8', title: 'PATENT_TITLE_2590' },
            { id: '64380b89-2d79-46aa-baef-84587209386c', title: 'PATENT_TITLE_9157' },
            { id: '7cbf55c5-6b2f-4124-a894-867b78a22835', title: 'PATENT_TITLE_3717' },
            { id: 'baf6a989-4b5d-4b9a-b343-95192ddfc313', title: 'PATENT_TITLE_1559' },
            { id: '780c5fd1-9db8-4eba-8166-22e1355b2d27', title: 'PATENT_TITLE_5294' },
            { id: 'e17f6c2d-b821-4568-ad8a-01ccc86fe4bb', title: 'PATENT_TITLE_5442' },
            { id: '2b3ab0a2-3f10-4372-8933-dc14b2323718', title: 'PATENT_TITLE_4961' },
            { id: '46e6f5a8-1e96-494d-9db9-90b329c57920', title: 'PATENT_TITLE_9867' },
        ]}
    />
)

export default App