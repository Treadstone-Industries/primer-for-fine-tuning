import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'abb22b68-2f96-40b1-83b5-dfc97cd7d2f6', title: 'PATENT_TITLE_6218' },
                { id: 'b5ed40c1-0d92-4957-8dd4-37ddb11319b1', title: 'PATENT_TITLE_5899' },
                { id: 'ec49deeb-4411-4b4f-a97e-42c35020964d', title: 'PATENT_TITLE_6545' },
            ]}
        />
    </Box>
)

export default App