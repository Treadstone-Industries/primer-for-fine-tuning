import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '96074f50-56a0-41a9-8a7a-02ee4405b85d', title: 'PATENT_TITLE_7285' },
                { id: 'ada76f00-b49b-4a35-adef-f63a77856292', title: 'PATENT_TITLE_4469' },
                { id: '4df6a4ef-ece5-47d9-8c27-12147893568b', title: 'PATENT_TITLE_3964' },
                { id: '6581d072-1efd-4ae3-a493-71f3b46c15f4', title: 'PATENT_TITLE_1484' },
                { id: 'dce74a78-15c7-47ed-a098-2f62a66e5d34', title: 'PATENT_TITLE_9433' },
                { id: 'f2c8aa51-64bd-40ee-920e-5e41295db734', title: 'PATENT_TITLE_9986' },
                { id: '1bde373d-1e8d-4289-82e0-f32cd63665e3', title: 'PATENT_TITLE_6172' },
                { id: 'db2b2119-3bb0-4f1d-a37a-611cff7eaf61', title: 'PATENT_TITLE_7255' },
                { id: '4d7b6f90-1d2f-4b11-9809-0deccc608507', title: 'PATENT_TITLE_6680' },
                { id: '7b445084-d2ed-4702-96df-a47e67e6af9c', title: 'PATENT_TITLE_4675' },
            ]}
        />
    </Box>
)

export default App