import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '46c822c3-f1ff-4152-975d-74c8b6197a5a', title: 'PATENT_TITLE_8994' },
            { id: '09282192-e3e2-44ec-94b7-69a234d75f0a', title: 'PATENT_TITLE_3082' },
            { id: 'e9a535d3-fc53-409e-a31c-7d6b60636060', title: 'PATENT_TITLE_2975' },
            { id: '16a7b13d-9d0e-4bdb-abd8-ae9ebb9802e6', title: 'PATENT_TITLE_4129' },
            { id: '06b03625-605d-42b7-8683-02aec3c69128', title: 'PATENT_TITLE_1662' },
            { id: 'ecd93a12-3e88-4d69-8478-e1962ceaccdf', title: 'PATENT_TITLE_9401' },
            { id: 'b3f44ec1-8cb5-42cc-8a3a-d7ae1385f30a', title: 'PATENT_TITLE_2889' },
            { id: '3b5ff3a3-bad9-4c08-b58f-ae047415578b', title: 'PATENT_TITLE_2051' },
            { id: '42e83875-5246-4376-8100-1f28a16525d3', title: 'PATENT_TITLE_6663' },
            { id: 'bd4ddde4-11be-42a8-bd47-885f7e7f0f42', title: 'PATENT_TITLE_3293' },
        ]}
    />
)

export default App