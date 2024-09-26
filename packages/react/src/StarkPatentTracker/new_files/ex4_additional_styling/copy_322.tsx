import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ce32c139-8a6b-4fca-9b6c-bad8ffe4b863', title: 'PATENT_TITLE_3995' },
                { id: '11b84ded-c9fd-4f8a-89bf-fa02bf6cabd6', title: 'PATENT_TITLE_7592' },
                { id: '84c0edec-cbf3-46ae-af06-dcb0959292e2', title: 'PATENT_TITLE_5290' },
                { id: '0047573c-5710-41eb-8ed9-86335af29124', title: 'PATENT_TITLE_5252' },
                { id: '1c4e4885-bebd-469d-ad3d-95441c99f58b', title: 'PATENT_TITLE_6048' },
            ]}
        />
    </Box>
)

export default App