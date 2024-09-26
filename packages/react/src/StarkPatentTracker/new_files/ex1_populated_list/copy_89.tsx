import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '668216b6-ba36-4212-8324-acd80d0f05c9', title: 'PATENT_TITLE_4614' },
            { id: '3b7f05b6-8b30-414c-8b93-2c622b9051b7', title: 'PATENT_TITLE_1999' },
            { id: 'a4794d94-4367-462b-a715-21a7a990182a', title: 'PATENT_TITLE_2194' },
            { id: '18c832a8-82c5-4d06-ad1e-5b4a5967d873', title: 'PATENT_TITLE_2229' },
            { id: 'e48dc20e-4fd2-4171-8d9c-2f6ab079dabe', title: 'PATENT_TITLE_5867' },
            { id: '29cdf114-cb05-487d-9ed6-426c31abf009', title: 'PATENT_TITLE_6849' },
            { id: 'fe85ee3f-d575-47de-8333-dfa35a81a2ff', title: 'PATENT_TITLE_5742' },
            { id: '18d491d6-014b-4ebb-a204-f176262d5cb7', title: 'PATENT_TITLE_8209' },
        ]}
    />
)

export default App