import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '83f452ab-091e-47b1-8941-9eb60f25f640', title: 'PATENT_TITLE_5503' },
                { id: '267c1eac-0e3a-4262-8f5e-f06ac3b07223', title: 'PATENT_TITLE_3411' },
                { id: '440aa107-d3fb-4736-a4f3-102a65c00e92', title: 'PATENT_TITLE_8171' },
                { id: '748ba9e5-3153-41b7-ad2c-d54026e9f862', title: 'PATENT_TITLE_6637' },
                { id: '298bee4b-f041-4405-9003-091eb502693f', title: 'PATENT_TITLE_3533' },
                { id: '33c79c57-6fd4-4ab2-b526-2838c0a1be62', title: 'PATENT_TITLE_7101' },
                { id: 'a6be8b7b-56f8-40d3-ba37-eaa51d7965e1', title: 'PATENT_TITLE_2913' },
                { id: '7d3c113a-cde3-4676-81e5-a20a06e14834', title: 'PATENT_TITLE_6797' },
                { id: 'c9d71ae0-2895-4687-b63e-e0434f4785f7', title: 'PATENT_TITLE_6765' },
            ]}
        />
    </Box>
)

export default App