import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '314dee7f-21d0-4774-b463-c27af5346168', title: 'PATENT_TITLE_9274' },
                { id: '97e85e81-2738-48ea-85fe-f95aaf4ad618', title: 'PATENT_TITLE_2658' },
                { id: '964875a4-e28a-4960-a59d-d2832ee50eb9', title: 'PATENT_TITLE_6990' },
                { id: '77c3cbba-870c-4e34-aec3-98bc237e201d', title: 'PATENT_TITLE_1446' },
                { id: '570e27f5-ce59-44cb-8348-31da30f85d1c', title: 'PATENT_TITLE_7878' },
            ]}
        />
    </Box>
)

export default App