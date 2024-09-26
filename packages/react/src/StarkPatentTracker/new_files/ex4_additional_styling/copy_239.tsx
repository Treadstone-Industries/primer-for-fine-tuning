import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '16eedb24-53ba-4bb5-b51a-b7dbb138ec1c', title: 'PATENT_TITLE_6881' },
                { id: '6b2f5005-a9b8-4f12-b9fb-1b08e08263b0', title: 'PATENT_TITLE_8928' },
                { id: '9e70ae1d-6191-4b7a-9ed1-947f979c9ee5', title: 'PATENT_TITLE_8605' },
                { id: 'c7818fa5-9cf6-4409-b0ac-e2bcd907e4c5', title: 'PATENT_TITLE_3305' },
                { id: '8911682e-2cc7-4f40-bca9-edd6d391fd8f', title: 'PATENT_TITLE_2117' },
                { id: '0948376b-6f16-4d2a-8aa2-c09745cb1c53', title: 'PATENT_TITLE_2469' },
            ]}
        />
    </Box>
)

export default App