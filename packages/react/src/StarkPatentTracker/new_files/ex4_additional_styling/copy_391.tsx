import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e40d8075-bb47-4efe-87d8-de07d773a94e', title: 'PATENT_TITLE_6487' },
                { id: 'd6eda6dd-050b-4afd-9c2c-0ae6e7ff3063', title: 'PATENT_TITLE_8284' },
                { id: '9de3cfdc-3bef-4f7f-a639-58a526d8ae55', title: 'PATENT_TITLE_5594' },
                { id: '36d204d4-8e9e-4aeb-b99d-cefa74c49667', title: 'PATENT_TITLE_3254' },
                { id: '2ff74af6-64c2-4403-8448-4e244e7ffb43', title: 'PATENT_TITLE_2391' },
                { id: '14349ebf-0849-4c9e-94b0-3582c8478912', title: 'PATENT_TITLE_8756' },
            ]}
        />
    </Box>
)

export default App