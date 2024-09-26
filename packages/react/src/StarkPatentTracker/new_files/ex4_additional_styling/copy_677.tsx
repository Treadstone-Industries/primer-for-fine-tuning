import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5401f7aa-66d2-4ee1-a49b-b12f74159c35', title: 'PATENT_TITLE_4269' },
                { id: '083bb97f-7f09-4199-8f4d-96ed54adc029', title: 'PATENT_TITLE_5531' },
                { id: '3aa98c99-2c2e-48c6-ba31-ed7fd51b0a43', title: 'PATENT_TITLE_9433' },
                { id: '941db480-5d00-4f88-be10-91da03452b08', title: 'PATENT_TITLE_6139' },
                { id: '0b3f2437-02bc-436e-af5c-1b6abcd18986', title: 'PATENT_TITLE_4546' },
            ]}
        />
    </Box>
)

export default App