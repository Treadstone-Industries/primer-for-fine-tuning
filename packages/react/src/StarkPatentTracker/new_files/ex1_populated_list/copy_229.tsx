import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4640ca3a-46f7-49ef-b0f9-10f673c08268', title: 'PATENT_TITLE_1013' },
            { id: '731bff0e-c7af-4157-a93f-e12293dfe0a7', title: 'PATENT_TITLE_3573' },
            { id: 'bc9b8ad9-5c73-4784-b0b3-e7b06e1f46b5', title: 'PATENT_TITLE_6542' },
            { id: 'a4ad6e15-1cd9-4174-92ff-0424da3d1e9d', title: 'PATENT_TITLE_6858' },
            { id: '256bceb3-6239-4759-be56-e3bb5447b7fb', title: 'PATENT_TITLE_4117' },
            { id: 'cff1259e-193f-410e-b21d-38fc35d28a78', title: 'PATENT_TITLE_9056' },
            { id: '026ffe6e-61cd-41e1-be5f-370d16b51306', title: 'PATENT_TITLE_2765' },
            { id: '8d21ca07-0968-48c9-88f1-8036648df7eb', title: 'PATENT_TITLE_9659' },
            { id: 'c17e6683-b380-4778-a765-6b6b88ed9d12', title: 'PATENT_TITLE_8549' },
            { id: 'f9379377-c3b6-4227-91e1-2397f07bba5e', title: 'PATENT_TITLE_6959' },
        ]}
    />
)

export default App