import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6458cdcd-d382-4c37-b56c-14c95b00764d', title: 'PATENT_TITLE_2418' },
                { id: '70b6481a-6c47-41ef-adfd-04a070f03abf', title: 'PATENT_TITLE_9760' },
                { id: '5d85791a-1c49-4d46-8216-d18499bb1a4b', title: 'PATENT_TITLE_2791' },
                { id: 'a443b5af-ebda-4ba7-bf1a-8d9396302526', title: 'PATENT_TITLE_7305' },
            ]}
        />
    </Box>
)

export default App