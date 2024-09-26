import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd8b70971-6600-4d04-a248-61323377f2e3', title: 'PATENT_TITLE_8122' },
                { id: 'd829f139-d0e5-4be1-8ba4-8b8c3fa85e30', title: 'PATENT_TITLE_9676' },
                { id: '19ecc577-eb1f-41ea-ad8f-0146f62c9dc6', title: 'PATENT_TITLE_9386' },
                { id: '538e6ea1-71a7-46a9-8cf2-7f4fbb3b823c', title: 'PATENT_TITLE_4868' },
                { id: '7e0df943-a858-4734-a8d4-67beefb1fc17', title: 'PATENT_TITLE_8797' },
            ]}
        />
    </Box>
)

export default App