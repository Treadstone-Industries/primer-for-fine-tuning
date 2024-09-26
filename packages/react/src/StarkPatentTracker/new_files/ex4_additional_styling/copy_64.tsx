import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b8f4c5fd-a0f5-405a-b93a-1b574edb5e8b', title: 'PATENT_TITLE_8306' },
                { id: '588d4a8f-fd19-43b1-95c6-ababbc6c1ce1', title: 'PATENT_TITLE_2085' },
                { id: 'eb513692-f82f-43f3-b68a-e3f9e67b7457', title: 'PATENT_TITLE_4783' },
                { id: 'c70c0e11-fc71-4d73-99d4-447a20c8ecf9', title: 'PATENT_TITLE_7549' },
                { id: '4bb4af43-1b35-43b6-9f16-c9da9e23f82e', title: 'PATENT_TITLE_4740' },
                { id: '555e9858-4048-4d45-b456-5512c1736d04', title: 'PATENT_TITLE_4619' },
                { id: 'ac627d68-3fb3-495d-bed1-470667cffdd3', title: 'PATENT_TITLE_8842' },
                { id: 'bc9cf6fe-0290-473c-bef7-0f23f9fbfead', title: 'PATENT_TITLE_5775' },
                { id: '88d89971-3fe4-4530-9bf7-aacf60e5decd', title: 'PATENT_TITLE_1619' },
            ]}
        />
    </Box>
)

export default App