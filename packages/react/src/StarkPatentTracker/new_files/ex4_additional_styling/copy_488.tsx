import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '298d02ff-bf2c-40da-9701-a81a6994e245', title: 'PATENT_TITLE_6642' },
                { id: 'e66648c2-5720-4ea6-99ab-3dae1d501452', title: 'PATENT_TITLE_2427' },
                { id: '9c8d72a5-c84e-43e5-a906-682d16aa7526', title: 'PATENT_TITLE_6071' },
            ]}
        />
    </Box>
)

export default App