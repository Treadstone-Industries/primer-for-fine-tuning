import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'de9b12cc-6aef-4d35-9ea8-25f4296f7633', title: 'PATENT_TITLE_6420' },
                { id: '6f9ca5ee-ac08-45fc-894b-633ff2f8afd9', title: 'PATENT_TITLE_4484' },
                { id: '12426530-961a-492b-a079-7b7bfc9ee810', title: 'PATENT_TITLE_5581' },
                { id: '5c91dfdd-b7c7-45d9-b542-b6184d5f021d', title: 'PATENT_TITLE_8588' },
                { id: '03962c40-eb62-4e1c-b48e-743710869c5b', title: 'PATENT_TITLE_9490' },
            ]}
        />
    </Box>
)

export default App