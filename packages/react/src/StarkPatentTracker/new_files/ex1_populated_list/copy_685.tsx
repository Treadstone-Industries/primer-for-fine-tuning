import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f412dfae-59d7-4667-85d7-2e5545da2abf', title: 'PATENT_TITLE_3451' },
            { id: '437ae484-1770-436e-a5c3-5a7c62f96135', title: 'PATENT_TITLE_8285' },
            { id: 'cd6c5858-9f55-4b14-9dd8-820c1fae7f65', title: 'PATENT_TITLE_3521' },
            { id: '4124e0af-7a1e-4854-a4e5-998a72ecf46c', title: 'PATENT_TITLE_6680' },
            { id: 'e476b36b-2511-43b5-bb46-0aa2567e5bc5', title: 'PATENT_TITLE_2109' },
            { id: '02a73e48-bd87-4f49-84b9-569cf7cd31a1', title: 'PATENT_TITLE_8802' },
            { id: '3732d7cb-c1e1-4629-a2cf-ee208d7c3b43', title: 'PATENT_TITLE_6959' },
            { id: '407ff9fd-cd81-4bdf-b28c-5c2edc9881e2', title: 'PATENT_TITLE_8677' },
            { id: '4da14680-c9c9-4f8e-95f4-b8c0b21031a9', title: 'PATENT_TITLE_3757' },
        ]}
    />
)

export default App