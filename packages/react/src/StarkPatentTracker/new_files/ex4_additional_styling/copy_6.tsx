import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2438d4a2-15f4-4996-9f18-0f584e1aefc1', title: 'PATENT_TITLE_3272' },
                { id: 'e69e4656-a9ce-4a03-80e4-8680f012b1cc', title: 'PATENT_TITLE_2764' },
                { id: 'c45b6bd1-d842-4b92-8070-cee66c3c23db', title: 'PATENT_TITLE_5319' },
                { id: '4302b8f1-4607-4486-a76e-0dc72911a9f5', title: 'PATENT_TITLE_6000' },
                { id: 'b03b80de-3576-4d23-9cbe-9df983269bf5', title: 'PATENT_TITLE_5342' },
                { id: '9cb0168d-faef-43fa-bf93-5b3efc62ab0e', title: 'PATENT_TITLE_8018' },
            ]}
        />
    </Box>
)

export default App