import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '59c42f28-792f-4437-a64c-42e58793fef8', title: 'PATENT_TITLE_9873' },
                { id: 'd9fe93a2-46a4-45c6-8502-ca2efd028758', title: 'PATENT_TITLE_9708' },
                { id: '883af0f1-9d32-4265-b5ba-1c7f40fc289c', title: 'PATENT_TITLE_9987' },
                { id: '9a858b8d-db1c-4bb1-89f7-b1b9883ff401', title: 'PATENT_TITLE_8874' },
                { id: '43c91057-d1af-4ecf-a7c0-79da5e0156fc', title: 'PATENT_TITLE_3461' },
                { id: '61de0409-0e89-4c5a-863c-a6ed83fbd20d', title: 'PATENT_TITLE_6904' },
                { id: '88f077bb-51d4-4ea1-a7e0-d40af30429a9', title: 'PATENT_TITLE_9073' },
            ]}
        />
    </Box>
)

export default App