import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '33cd6d3b-bd0c-43da-923d-3e3a5fe694b8', title: 'PATENT_TITLE_6600' },
                { id: '040a8992-00e5-4952-bf66-f7914bc2acbe', title: 'PATENT_TITLE_8539' },
                { id: '9e6b84a7-e299-461d-b0d8-25da9b1bf93f', title: 'PATENT_TITLE_2326' },
            ]}
        />
    </Box>
)

export default App