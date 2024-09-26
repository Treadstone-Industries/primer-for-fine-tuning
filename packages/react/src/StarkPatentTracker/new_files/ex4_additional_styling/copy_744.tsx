import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '01deaa89-f5b9-47b3-9793-efbf32868ffc', title: 'PATENT_TITLE_2844' },
                { id: '4117a344-4dcd-4660-b7ee-6ba2c43b0d66', title: 'PATENT_TITLE_7754' },
                { id: '484c510c-8c6d-4d53-bc54-d27fb3b58e27', title: 'PATENT_TITLE_9774' },
            ]}
        />
    </Box>
)

export default App