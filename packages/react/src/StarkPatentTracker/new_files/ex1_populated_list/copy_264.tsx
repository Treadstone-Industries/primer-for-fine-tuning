import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '040fae32-ad3c-44cb-aff1-938766778673', title: 'PATENT_TITLE_2493' },
            { id: '6a2a16a1-650e-4250-a662-1be7d7959a2c', title: 'PATENT_TITLE_1026' },
            { id: '4d576bbd-aadd-4513-b681-bc0f6597724e', title: 'PATENT_TITLE_1774' },
            { id: 'f3b7e86b-757e-4965-bed9-9e18b5145cbf', title: 'PATENT_TITLE_2187' },
            { id: '46646301-3f59-4e2a-a3cd-772bdcc1b973', title: 'PATENT_TITLE_5606' },
            { id: 'de6b4455-7445-4558-8132-3c5f150aec2d', title: 'PATENT_TITLE_9159' },
            { id: '9da19c5e-0a02-44db-8487-cab5cd4a87fc', title: 'PATENT_TITLE_6756' },
            { id: '47b31715-c408-4ddf-babb-255c1b9df098', title: 'PATENT_TITLE_7754' },
        ]}
    />
)

export default App