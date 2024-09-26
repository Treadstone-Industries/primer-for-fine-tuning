import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2c3da6f9-5914-45c3-9096-1a7a75846e5c', title: 'PATENT_TITLE_8058' },
            { id: 'ac1e06be-aae8-43e3-9de7-2a73b7f95210', title: 'PATENT_TITLE_3287' },
            { id: '1af1c9cc-3fc9-4bbf-9ea4-7341b000535a', title: 'PATENT_TITLE_1791' },
            { id: '3fd2c4a0-25cc-425b-bece-a88c6643bbfd', title: 'PATENT_TITLE_5976' },
            { id: 'e52e89f7-8d0d-4fd9-b178-70f10d9c8dee', title: 'PATENT_TITLE_1334' },
            { id: '692d3e5e-30e1-4bfb-b890-421525725cf5', title: 'PATENT_TITLE_7144' },
            { id: 'd0893ca9-63a7-4f9b-8fd2-38089698c57e', title: 'PATENT_TITLE_1352' },
            { id: '94943d1f-9a8d-407c-8dbe-0a29873052d2', title: 'PATENT_TITLE_6834' },
            { id: '9dfc4dac-1be8-478d-b8c6-b93471a00068', title: 'PATENT_TITLE_7551' },
            { id: '9c4a6180-1f82-4c4f-87f2-d78d117e6e61', title: 'PATENT_TITLE_9149' },
        ]}
    />
)

export default App