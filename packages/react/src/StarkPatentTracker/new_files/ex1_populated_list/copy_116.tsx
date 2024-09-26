import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'dd84bcbc-951c-4b8a-93e1-93a5ac7c4769', title: 'PATENT_TITLE_6682' },
            { id: 'd02b1130-5953-490b-b0a4-45c599d14d21', title: 'PATENT_TITLE_7298' },
            { id: '7e155c88-89a1-476e-a365-bc5395bbb383', title: 'PATENT_TITLE_2062' },
            { id: 'dd686dea-b036-4ec0-9fe1-977346c5c676', title: 'PATENT_TITLE_9654' },
            { id: '8e5e8880-43be-4df6-bd87-ade025bf8962', title: 'PATENT_TITLE_9562' },
            { id: '1aebf0cc-d610-44c2-80ef-3f0d3a8e8358', title: 'PATENT_TITLE_3518' },
            { id: 'f16d4c2d-6810-4678-83f9-0665bf132bfe', title: 'PATENT_TITLE_5668' },
        ]}
    />
)

export default App