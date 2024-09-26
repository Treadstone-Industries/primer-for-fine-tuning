import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '874cb849-1a56-4324-8b02-7439dbc48f83', title: 'PATENT_TITLE_5278' },
                { id: '1c8b2a30-cd9d-49b9-865b-0e2836a1969c', title: 'PATENT_TITLE_3347' },
                { id: '38f63248-13dc-4d88-855f-89987fc95a93', title: 'PATENT_TITLE_4292' },
                { id: 'df4f3c11-328c-4773-931b-2b09778373aa', title: 'PATENT_TITLE_3925' },
                { id: 'e673819b-dedf-4620-87c3-c5983e7155f6', title: 'PATENT_TITLE_6414' },
                { id: '77306e44-b865-475b-ac89-6827ea83220b', title: 'PATENT_TITLE_9198' },
                { id: '88c7a059-63c1-45cb-9a2b-1053eae5316d', title: 'PATENT_TITLE_2446' },
                { id: '3b246666-7a8a-4dbf-827e-ee498992f63b', title: 'PATENT_TITLE_3182' },
                { id: '6bef7186-1130-48be-854a-295231a81cd0', title: 'PATENT_TITLE_9630' },
            ]}
        />
    </Box>
)

export default App