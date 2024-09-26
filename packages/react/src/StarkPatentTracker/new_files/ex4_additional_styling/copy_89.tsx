import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4dd8b9ca-1e5c-43b7-9dbd-8269711e3860', title: 'PATENT_TITLE_3452' },
                { id: 'd01dd119-f254-45a5-99e1-79f80999d5fb', title: 'PATENT_TITLE_6032' },
                { id: 'f4e67715-c004-4312-93b6-609dd0aa62cf', title: 'PATENT_TITLE_2249' },
                { id: 'd72c30f2-2a1c-4d9d-aae8-b42cffd6fabb', title: 'PATENT_TITLE_5349' },
                { id: 'cad21493-5765-47e6-b141-1c4996704fef', title: 'PATENT_TITLE_5560' },
                { id: '06a991b2-fbd7-49fe-8c85-c0ab19cb3cca', title: 'PATENT_TITLE_2630' },
            ]}
        />
    </Box>
)

export default App