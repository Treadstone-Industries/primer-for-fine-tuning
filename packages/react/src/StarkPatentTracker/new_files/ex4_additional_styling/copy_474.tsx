import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '49b94476-9e58-48cc-b09f-edb3a19c4c10', title: 'PATENT_TITLE_7791' },
                { id: 'eecf4303-295e-4707-998e-d39ba33dbbf6', title: 'PATENT_TITLE_3209' },
                { id: '03ff6366-6c45-449b-8b61-ae36a6c1dd3b', title: 'PATENT_TITLE_5929' },
                { id: 'f658f4ef-f015-4653-8f25-e148cb9dfe5a', title: 'PATENT_TITLE_3496' },
                { id: '326fc759-5fb7-4689-8a2a-2cf81cdb3b9f', title: 'PATENT_TITLE_1337' },
                { id: 'f2ffd444-ff75-493d-a84a-6b44c08aa5d1', title: 'PATENT_TITLE_2571' },
                { id: 'a00fd1d6-e807-47d1-8d2f-6bbe54c86386', title: 'PATENT_TITLE_6831' },
                { id: 'a1cb92b8-9c01-471f-ba1d-0a95408e7e7f', title: 'PATENT_TITLE_8706' },
            ]}
        />
    </Box>
)

export default App