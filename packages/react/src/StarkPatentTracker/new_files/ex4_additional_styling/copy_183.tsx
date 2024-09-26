import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '96866456-41a1-4424-9bac-1dca5dcf3a7c', title: 'PATENT_TITLE_4664' },
                { id: 'd9126873-9680-4d2b-a027-aefefc59c3f9', title: 'PATENT_TITLE_8131' },
                { id: 'badb17ec-6a4b-4f98-9ead-84651f94c4ad', title: 'PATENT_TITLE_7295' },
                { id: 'fbecc106-044e-4518-830e-2de8c05fce30', title: 'PATENT_TITLE_3555' },
                { id: '935de71f-f5c7-47f3-bc10-3fc62d55cd3c', title: 'PATENT_TITLE_2089' },
                { id: '1de89a19-eeea-49fa-a510-5d1d6efcafed', title: 'PATENT_TITLE_1973' },
                { id: 'bd4e07fc-397c-4a15-9ee7-3b3e1cb353d6', title: 'PATENT_TITLE_6302' },
            ]}
        />
    </Box>
)

export default App