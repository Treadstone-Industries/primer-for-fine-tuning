import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '67d390a4-6c83-467f-a79c-e296b89d7bd6', title: 'PATENT_TITLE_9929' },
            { id: 'aecc5451-242d-4b02-a589-5713d5cd38df', title: 'PATENT_TITLE_2879' },
            { id: 'a294245d-2ec2-4f5f-a582-943f4d1808f2', title: 'PATENT_TITLE_7894' },
            { id: '1ac2ddfe-6507-4db3-87c6-3a858725b558', title: 'PATENT_TITLE_5616' },
            { id: '19d62ff4-b750-4b63-bfc8-9bf66c494c12', title: 'PATENT_TITLE_2930' },
            { id: 'f230748e-e0a4-4fc2-9bc3-652bf6501d23', title: 'PATENT_TITLE_1999' },
            { id: '1a91160b-766c-4dea-b48f-c82613ca5927', title: 'PATENT_TITLE_9969' },
            { id: 'a9980734-1c28-4e22-9e89-4575b25e56b2', title: 'PATENT_TITLE_1835' },
            { id: '12d16486-3692-48b7-8676-9daaf2050627', title: 'PATENT_TITLE_4329' },
            { id: '98fa77d1-8a7b-46c1-860e-38c8b71f2c2a', title: 'PATENT_TITLE_8069' },
        ]}
    />
)

export default App