import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cf6f22f5-5bff-45a9-9246-deb592652502', title: 'PATENT_TITLE_4686' },
                { id: '88840b2b-8505-4114-84c1-43976e8ab136', title: 'PATENT_TITLE_6416' },
                { id: 'f184bfd5-47e5-4cd7-972b-6d32139cedaf', title: 'PATENT_TITLE_1487' },
                { id: 'ccdc9950-5ddc-4106-abb2-756b7623f11d', title: 'PATENT_TITLE_5960' },
                { id: 'd7ffa826-56cd-40d8-b7c0-cc446a0738ef', title: 'PATENT_TITLE_9392' },
                { id: '7baf7222-6c72-4bf0-8927-ce61a640b8d2', title: 'PATENT_TITLE_6391' },
                { id: 'b360d7c5-3d00-4f43-b818-70b19b823b5d', title: 'PATENT_TITLE_1918' },
            ]}
        />
    </Box>
)

export default App