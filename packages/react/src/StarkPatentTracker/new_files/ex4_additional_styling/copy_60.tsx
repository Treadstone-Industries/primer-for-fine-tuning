import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cb0101ea-24e2-4b61-a2dd-743789350929', title: 'PATENT_TITLE_8825' },
                { id: 'a75d848e-dbd3-4467-b12f-eccc23fcc056', title: 'PATENT_TITLE_7357' },
                { id: '1f34284f-53e6-4ab1-9737-583486ee34b6', title: 'PATENT_TITLE_7034' },
                { id: '85a6dffc-c510-42da-9cf0-1650373b5527', title: 'PATENT_TITLE_3727' },
                { id: '6ad96f2d-5955-4434-a528-972897ef52b7', title: 'PATENT_TITLE_6003' },
                { id: '0a4f4eb1-da12-4da3-829d-28d6b3c0692e', title: 'PATENT_TITLE_8897' },
            ]}
        />
    </Box>
)

export default App