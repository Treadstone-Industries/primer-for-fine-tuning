import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'af465e8b-8518-410e-a6fd-33f4d5f818a8', title: 'PATENT_TITLE_9315' },
                { id: '1fa92626-7550-47a2-b3e2-9359c7f83e85', title: 'PATENT_TITLE_9336' },
                { id: 'ef43b0a9-e34f-4422-b5b3-e15bfca488d0', title: 'PATENT_TITLE_2124' },
                { id: 'ad6ddcfd-ee9c-459c-9e05-4af97e4a5996', title: 'PATENT_TITLE_3351' },
                { id: '11cb6a45-745b-481e-8bb7-d63748a8f9af', title: 'PATENT_TITLE_6547' },
            ]}
        />
    </Box>
)

export default App