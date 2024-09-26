import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '31121d83-2130-43e2-9ec8-a3c54e605973', title: 'PATENT_TITLE_7789' },
                { id: '436f79c5-7282-4122-915e-7148c4be2872', title: 'PATENT_TITLE_2978' },
                { id: 'cf83eef4-084a-4ae4-a4d7-1a5076643bb0', title: 'PATENT_TITLE_3097' },
            ]}
        />
    </Box>
)

export default App