import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9cc9137d-7944-424f-9cf1-41838c0f33b0', title: 'PATENT_TITLE_1093' },
                { id: 'a2c401e9-1b52-44a3-a6df-a61ad7ebf514', title: 'PATENT_TITLE_5270' },
                { id: '8034c270-5e26-4223-8cdc-b98e34496806', title: 'PATENT_TITLE_4582' },
                { id: 'c9c2da4b-ff69-414e-856c-29aa663b5b55', title: 'PATENT_TITLE_4653' },
                { id: '19febd2f-8601-4d7b-99d7-d2c7c04f5e9c', title: 'PATENT_TITLE_9055' },
                { id: '6c834180-b2de-43f2-a3d9-82534fb5e8d2', title: 'PATENT_TITLE_6278' },
            ]}
        />
    </Box>
)

export default App