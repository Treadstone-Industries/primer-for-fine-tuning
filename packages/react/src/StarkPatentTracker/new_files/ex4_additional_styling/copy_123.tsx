import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a62f86fe-f0ed-4f97-b986-1d9199646dcb', title: 'PATENT_TITLE_3842' },
                { id: '752074fe-5294-4bc4-ae05-9edbb7f89e77', title: 'PATENT_TITLE_6662' },
                { id: 'e0bede41-d2de-4406-84d2-3d574bd9de76', title: 'PATENT_TITLE_9714' },
                { id: '311d600c-3db4-40e6-b0d9-aacfa868461c', title: 'PATENT_TITLE_6550' },
                { id: '3dad74e1-0b5f-4380-a11e-9c595f9c9fa7', title: 'PATENT_TITLE_3784' },
                { id: '20b44b35-a457-42d2-afd7-4636a864a053', title: 'PATENT_TITLE_8122' },
                { id: 'a8e46f4f-b108-4484-b0fd-eb0823e255a1', title: 'PATENT_TITLE_1069' },
                { id: '2ae8c97b-5d3d-48cf-9cbe-a116278bb672', title: 'PATENT_TITLE_2629' },
            ]}
        />
    </Box>
)

export default App