import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ee91713d-9117-4a0b-9dc9-638d2a3c1f6c', title: 'PATENT_TITLE_8196' },
                { id: '4ebc26bd-89b4-4ef0-8ed7-30cbce5d4438', title: 'PATENT_TITLE_1896' },
                { id: '1bef144c-95f5-4274-8fb9-196a77c6cc5d', title: 'PATENT_TITLE_5758' },
                { id: '2cf68f48-f1a3-4625-a7fd-570f70b61351', title: 'PATENT_TITLE_3162' },
                { id: '529de95d-ec9f-4e90-b699-634f863d38f5', title: 'PATENT_TITLE_8595' },
                { id: '5ebd5a3d-49c6-4309-98f4-308dfd816913', title: 'PATENT_TITLE_2625' },
                { id: '447cb788-34a0-43fa-8272-0e915bf5c156', title: 'PATENT_TITLE_5938' },
            ]}
        />
    </Box>
)

export default App