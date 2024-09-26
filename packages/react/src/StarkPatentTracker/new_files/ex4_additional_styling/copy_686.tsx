import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fa73d879-24f5-4b58-b7ec-e688f9a5c20a', title: 'PATENT_TITLE_7009' },
                { id: '22836a4c-d1bf-416d-9f9c-9fb3aef8ddf2', title: 'PATENT_TITLE_9718' },
            ]}
        />
    </Box>
)

export default App