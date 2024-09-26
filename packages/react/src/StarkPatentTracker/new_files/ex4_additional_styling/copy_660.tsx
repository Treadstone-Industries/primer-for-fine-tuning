import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8c4c33c2-c865-4dce-8944-8551f873fdf4', title: 'PATENT_TITLE_6300' },
                { id: 'dd72cf9b-b8bd-46e8-a5fb-e5e719456b07', title: 'PATENT_TITLE_2088' },
                { id: 'd702eba0-55c9-491c-bb37-b5efd63b15b7', title: 'PATENT_TITLE_6704' },
                { id: 'f125d2db-cf0e-47cb-a503-c2ae6bcf9f1a', title: 'PATENT_TITLE_7867' },
            ]}
        />
    </Box>
)

export default App