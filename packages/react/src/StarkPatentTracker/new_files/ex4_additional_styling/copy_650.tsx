import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '93365529-c949-44eb-8e48-b8e52660993a', title: 'PATENT_TITLE_1782' },
                { id: '54dc4687-7210-445b-94f7-49ade9ebdcd0', title: 'PATENT_TITLE_4381' },
                { id: '860ff16f-1dde-4d03-9eb8-705c39bd12c4', title: 'PATENT_TITLE_2589' },
            ]}
        />
    </Box>
)

export default App