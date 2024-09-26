import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a119528e-b863-41dc-8bb4-11f3fb74c955', title: 'PATENT_TITLE_3399' },
                { id: 'ae9c9747-968e-4cf2-9766-ec1c812989f5', title: 'PATENT_TITLE_9460' },
                { id: '04c1dc7c-deca-4665-bed9-1fd9e2c3ea41', title: 'PATENT_TITLE_2394' },
                { id: '60de1ab2-0449-4f48-8192-d622a2ae96bb', title: 'PATENT_TITLE_7087' },
            ]}
        />
    </Box>
)

export default App