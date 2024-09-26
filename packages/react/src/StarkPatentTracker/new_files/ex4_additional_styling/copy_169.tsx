import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e3895750-4a97-4aed-8b09-3f7b1d70ff71', title: 'PATENT_TITLE_9146' },
                { id: '12316531-2092-4e56-ab93-41d698187d0b', title: 'PATENT_TITLE_8540' },
                { id: 'dd7e1117-3d81-42da-8c87-d155ae11e15d', title: 'PATENT_TITLE_1125' },
                { id: '6c5c79de-9e6e-4e72-9df7-11b4226eb5ff', title: 'PATENT_TITLE_4372' },
                { id: '654e0ee5-0be4-4547-b103-0a05a89bda3e', title: 'PATENT_TITLE_2729' },
                { id: '68dc370c-d525-43b3-bcfc-11e58d08a866', title: 'PATENT_TITLE_9340' },
                { id: '85025aa4-16ae-4e51-9895-3a2322151a67', title: 'PATENT_TITLE_3785' },
                { id: '0f09550a-c7f3-49c2-b128-720cb6a0512a', title: 'PATENT_TITLE_3390' },
                { id: '34f75d81-fb30-4590-81d6-5ad827e522d7', title: 'PATENT_TITLE_7824' },
            ]}
        />
    </Box>
)

export default App