import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '82db3e27-ecd7-4aae-ac99-06b1d11a38d2', title: 'PATENT_TITLE_1180' },
                { id: '41784c8e-8ae8-4856-b599-6296be36630a', title: 'PATENT_TITLE_9201' },
                { id: '9057f214-2154-4ea1-8eff-f62ec3e3e65a', title: 'PATENT_TITLE_6953' },
                { id: '087224e3-d94b-49d1-9405-1691b12c5af2', title: 'PATENT_TITLE_7349' },
                { id: '08a5a8ae-85ae-4d77-bce5-e94bc2624bd6', title: 'PATENT_TITLE_2283' },
                { id: '93558985-cb2c-42d9-9770-4846e7e1b10e', title: 'PATENT_TITLE_2208' },
                { id: '0a0b9fd7-a887-440d-82ea-1308f04b9c92', title: 'PATENT_TITLE_6104' },
                { id: '5072b33c-2138-4c92-813f-b615d3c33c2e', title: 'PATENT_TITLE_1297' },
            ]}
        />
    </Box>
)

export default App