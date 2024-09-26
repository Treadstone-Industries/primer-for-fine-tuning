import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bdb1d277-bd55-4718-be4f-d3d3790455df', title: 'PATENT_TITLE_1557' },
                { id: '8a03aba3-c685-49ba-aef2-a3ad8e927d13', title: 'PATENT_TITLE_6226' },
                { id: '3b44856c-1129-4abc-9c61-95f95ded72b4', title: 'PATENT_TITLE_7959' },
            ]}
        />
    </Box>
)

export default App