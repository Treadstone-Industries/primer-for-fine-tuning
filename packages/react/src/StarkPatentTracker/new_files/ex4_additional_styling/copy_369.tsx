import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0d4c88bd-a365-4049-a72f-39527b8854f3', title: 'PATENT_TITLE_7732' },
                { id: '1e1ad97c-f3ae-446e-94d6-bfe3cf7f6ced', title: 'PATENT_TITLE_6598' },
                { id: '39524aba-a076-4c3d-ad51-4d838b9897df', title: 'PATENT_TITLE_3175' },
                { id: '2a679bef-aab8-41a0-a9d9-ccb008891f9f', title: 'PATENT_TITLE_4844' },
                { id: '2f7a285c-fee1-4cbe-a5aa-bf06a84af388', title: 'PATENT_TITLE_1476' },
                { id: 'be109e78-b495-4b81-9a76-127a934b087e', title: 'PATENT_TITLE_4282' },
                { id: '96a6864e-8fa2-41b3-9077-3c5bf810b67a', title: 'PATENT_TITLE_6083' },
            ]}
        />
    </Box>
)

export default App