import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e8e47f90-81bc-4661-8752-79fd06d16185', title: 'PATENT_TITLE_1720' },
                { id: '4a66f8e1-4c5a-4fb4-93a2-e7bb3591a262', title: 'PATENT_TITLE_3068' },
                { id: '9691daa9-b883-4d2c-abe8-c3e73bf21fc3', title: 'PATENT_TITLE_6832' },
                { id: '330492a3-0a1c-483c-9ff1-e395fe61c865', title: 'PATENT_TITLE_5080' },
                { id: '5228e11c-dea7-4427-810c-62896ab1bc87', title: 'PATENT_TITLE_9012' },
                { id: '00f937e9-5211-4347-b10e-e50d6adce0c6', title: 'PATENT_TITLE_5779' },
                { id: '2ec22914-e9cd-4178-83db-5e4133ea09a4', title: 'PATENT_TITLE_1993' },
            ]}
        />
    </Box>
)

export default App