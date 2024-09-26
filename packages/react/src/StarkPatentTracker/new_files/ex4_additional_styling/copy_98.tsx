import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '59e83b96-b014-4683-948b-47ff60819cb7', title: 'PATENT_TITLE_6670' },
                { id: '6fa834ef-78dd-43c0-aa14-0c0a2cad7300', title: 'PATENT_TITLE_2026' },
                { id: 'c781515b-8168-463e-b4f6-49cebf8a7b56', title: 'PATENT_TITLE_3906' },
                { id: '98fa7cc2-1b70-4d8e-b99e-d346435a850c', title: 'PATENT_TITLE_9281' },
                { id: '96c915da-59c6-4a01-a7cc-734adb8986c2', title: 'PATENT_TITLE_5074' },
            ]}
        />
    </Box>
)

export default App