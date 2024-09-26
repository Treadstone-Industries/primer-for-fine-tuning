import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '73a61753-000d-4d2c-a63f-14fd3d6703d8', title: 'PATENT_TITLE_4913' },
                { id: '779b4338-d94b-48ea-b887-5c8bdcbfa7e4', title: 'PATENT_TITLE_3608' },
                { id: 'b0230f2e-0132-4bf6-9b69-c0adffaa9b20', title: 'PATENT_TITLE_7340' },
                { id: '5a1f6ea0-edc5-4bc2-a5b1-d6c7e21fe917', title: 'PATENT_TITLE_1524' },
                { id: '15b04629-a15a-406d-8d8d-65c22433c5e0', title: 'PATENT_TITLE_2036' },
                { id: '2872c1cd-b159-485f-b59c-8121ee5b222f', title: 'PATENT_TITLE_8833' },
                { id: 'f66fa7ef-6e6c-4812-b407-82a976a06342', title: 'PATENT_TITLE_8412' },
                { id: 'a912d037-92a3-4c1b-a0e0-f13a9fa22611', title: 'PATENT_TITLE_7159' },
                { id: '9e0f48e1-522b-4d69-9182-28f9b2cd59a7', title: 'PATENT_TITLE_5337' },
            ]}
        />
    </Box>
)

export default App