import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e3162154-2a37-45e1-944e-6b9bc8a0d1bf', title: 'PATENT_TITLE_5930' },
                { id: '47a3ed9e-3542-4765-a1f9-ff09f2bc238b', title: 'PATENT_TITLE_1587' },
                { id: 'e2f54822-2d2c-4d80-998b-e3cf2b0e48d3', title: 'PATENT_TITLE_1449' },
                { id: '04acfce3-f4d8-4b61-ad78-665d51804f3f', title: 'PATENT_TITLE_5964' },
                { id: '602a3438-50eb-423f-8b40-d15f2a099cde', title: 'PATENT_TITLE_4120' },
                { id: 'a70663c8-3152-4409-b243-69330a5cf561', title: 'PATENT_TITLE_1442' },
                { id: '9e05618c-e4a1-4e01-ad65-ffb1f359fec5', title: 'PATENT_TITLE_6700' },
                { id: 'ff9063d5-e8b7-4a63-9d2e-6cdd6718c390', title: 'PATENT_TITLE_6382' },
                { id: '460fd8f6-2ef0-41a5-9484-73e001d38df7', title: 'PATENT_TITLE_1138' },
            ]}
        />
    </Box>
)

export default App