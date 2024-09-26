import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a1cc6e58-f7f1-40f3-92d6-4289f6679ae6', title: 'PATENT_TITLE_6435' },
                { id: '1d114a86-732c-4712-82bd-049c6c8c108c', title: 'PATENT_TITLE_2940' },
                { id: '23385173-dcaa-45a0-9b6e-8166286d35fe', title: 'PATENT_TITLE_9160' },
                { id: '7d0517f3-0a25-471e-9265-16c9edc54f73', title: 'PATENT_TITLE_8770' },
                { id: '6ff24c56-a219-4346-aff7-52dc54ae0c36', title: 'PATENT_TITLE_8689' },
                { id: '7b319e77-3292-4844-83ac-96f2e710e5ac', title: 'PATENT_TITLE_3386' },
                { id: '4dbf970f-bd9c-4f3a-bd5f-20bedb7c5e47', title: 'PATENT_TITLE_6579' },
                { id: 'a77a6102-0f22-46ab-b620-da95c5f29851', title: 'PATENT_TITLE_4849' },
                { id: '702de2f0-7a16-4660-9e6b-e1d4f58e33a4', title: 'PATENT_TITLE_5249' },
                { id: '31913f18-a059-4041-89ea-eae8de42e482', title: 'PATENT_TITLE_3085' },
            ]}
        />
    </Box>
)

export default App