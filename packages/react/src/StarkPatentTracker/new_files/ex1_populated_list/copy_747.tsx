import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f1aa8d92-5e55-4377-8d69-fe41e9aef403', title: 'PATENT_TITLE_7117' },
            { id: '95523156-5fd1-4c73-8bd9-b71e141385a3', title: 'PATENT_TITLE_5141' },
            { id: 'ffa4932b-7b4b-433d-af57-4c7d5f8be31f', title: 'PATENT_TITLE_3163' },
            { id: '7f8ca477-7105-4c8f-976a-0583942d0b21', title: 'PATENT_TITLE_5809' },
            { id: '2a3fad90-ef86-4319-b167-7338ce0b5ef0', title: 'PATENT_TITLE_8249' },
            { id: 'e3d7cae4-2f65-4f4b-80ac-4b66dc30bbcc', title: 'PATENT_TITLE_5805' },
        ]}
    />
)

export default App