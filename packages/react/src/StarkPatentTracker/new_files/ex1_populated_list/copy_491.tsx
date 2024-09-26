import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '714b8493-87f2-45db-b58d-6ed5169110c2', title: 'PATENT_TITLE_4053' },
            { id: '1514d7ff-b210-4012-82ac-66b58da75285', title: 'PATENT_TITLE_9413' },
            { id: 'a45fdd15-5ff4-4745-b643-cfe1c65f61b8', title: 'PATENT_TITLE_3608' },
            { id: 'deb91faf-c9c5-4545-bf14-bb5497277b68', title: 'PATENT_TITLE_3916' },
            { id: 'aed33688-0f3a-48ca-b5c6-3a117ccbaede', title: 'PATENT_TITLE_1213' },
            { id: 'f075083a-3474-4e63-9d2b-9e1abd78ac5e', title: 'PATENT_TITLE_6991' },
            { id: '49c426bf-77ee-4d4e-93e7-ccc7e147e610', title: 'PATENT_TITLE_3212' },
        ]}
    />
)

export default App