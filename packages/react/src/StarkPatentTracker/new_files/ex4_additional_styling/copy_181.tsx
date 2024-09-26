import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '554c70d2-292f-484d-82e0-1cc160a22f79', title: 'PATENT_TITLE_6709' },
                { id: '3cad0350-c43d-483d-8c50-aa471705edb9', title: 'PATENT_TITLE_9036' },
                { id: 'fcabe81c-f9a4-4882-9db5-3ea3057b4106', title: 'PATENT_TITLE_2391' },
                { id: 'ce451731-c46f-4e54-acff-e9c269759089', title: 'PATENT_TITLE_6571' },
                { id: 'e67f505e-58d0-4555-b1ab-9aa4e9bf4e47', title: 'PATENT_TITLE_7493' },
            ]}
        />
    </Box>
)

export default App