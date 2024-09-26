import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b9775817-0af3-4724-b8af-91c504fdb7e0', title: 'PATENT_TITLE_3171' },
            { id: 'ab7d8b21-053b-44af-9376-c6c4b62cd704', title: 'PATENT_TITLE_1863' },
            { id: 'a6f0277c-3f28-4778-ba42-911278b8d377', title: 'PATENT_TITLE_7854' },
            { id: 'e74442e5-9b57-49e2-943f-e9498abf98ba', title: 'PATENT_TITLE_3817' },
            { id: '3f422f69-964d-422e-a9c6-8b82b9bf81e7', title: 'PATENT_TITLE_8172' },
            { id: '5f638e5c-164b-4b1c-ae4e-c741e7674c9f', title: 'PATENT_TITLE_9582' },
            { id: 'fde47866-262f-48dd-9c34-5a17c591d662', title: 'PATENT_TITLE_4617' },
        ]}
    />
)

export default App