import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ce5163dc-14df-48a2-9075-5968691e16f9', title: 'PATENT_TITLE_3533' },
                { id: '4a460d72-fd10-4ccc-9694-175e39c7646a', title: 'PATENT_TITLE_2098' },
                { id: 'bcf43ca0-7fd0-405f-b502-2ecfeb6ee74c', title: 'PATENT_TITLE_2831' },
            ]}
        />
    </Box>
)

export default App