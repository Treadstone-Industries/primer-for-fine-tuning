import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '01a1bddd-f6c7-432d-b70a-042fa05d5ee9', title: 'PATENT_TITLE_7797' },
            { id: '613e5b46-4747-48e4-baaa-66439a0caaa9', title: 'PATENT_TITLE_1724' },
            { id: '9d4b2de3-74c0-4a13-b6d1-97e8c03a578c', title: 'PATENT_TITLE_1343' },
            { id: '2254a483-67e6-43a9-97ae-94fd3c9a0820', title: 'PATENT_TITLE_7607' },
            { id: '085662f6-4ad8-4255-a8e9-4dce16243f40', title: 'PATENT_TITLE_1754' },
            { id: 'beac698d-e859-46d6-97f8-b34666944e55', title: 'PATENT_TITLE_5738' },
            { id: 'f143e1b2-0bad-4b75-9c52-eef602cca854', title: 'PATENT_TITLE_8204' },
            { id: 'af125b2c-a922-434a-b2ee-f9503ac95e63', title: 'PATENT_TITLE_2246' },
            { id: 'aebe4890-efdd-4bc3-8860-d912cacec5ff', title: 'PATENT_TITLE_2723' },
            { id: 'fbcfbd42-50c9-4d2d-81ab-09e870570607', title: 'PATENT_TITLE_9008' },
        ]}
    />
)

export default App