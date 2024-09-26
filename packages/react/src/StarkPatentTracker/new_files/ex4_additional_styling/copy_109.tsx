import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '13b266a0-40ff-4035-a361-b891ceccdd77', title: 'PATENT_TITLE_3111' },
                { id: '9d4ead9e-d0b7-40e3-8e27-52d274f530b9', title: 'PATENT_TITLE_2378' },
                { id: '4dd63f5f-b486-426f-be21-2152844f2a82', title: 'PATENT_TITLE_8198' },
                { id: '70068b17-1489-4330-ace2-e2598e564307', title: 'PATENT_TITLE_4287' },
                { id: '8c044501-ae98-4541-8dda-cde2837f70cc', title: 'PATENT_TITLE_9328' },
                { id: 'e0441d8a-a476-4320-87b8-da8ab0cf171f', title: 'PATENT_TITLE_6750' },
                { id: '2f053656-b64a-4de6-9f3e-34765ac230e9', title: 'PATENT_TITLE_3873' },
                { id: '7fe24b7d-1a8d-43e8-8fea-9f1a0aa82e23', title: 'PATENT_TITLE_4816' },
            ]}
        />
    </Box>
)

export default App