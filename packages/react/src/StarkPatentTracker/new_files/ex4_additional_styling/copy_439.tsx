import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3f6560b9-5359-4e7b-a4db-d8468af178bf', title: 'PATENT_TITLE_2774' },
                { id: '74907946-df11-4a4e-a23a-b311145d178e', title: 'PATENT_TITLE_9379' },
                { id: '380feb7f-ba0a-464d-b99c-6c9627870748', title: 'PATENT_TITLE_2739' },
                { id: 'be9c5435-c419-4c43-b9b0-5d33d61fdd9f', title: 'PATENT_TITLE_8618' },
                { id: 'c1ff8a71-3f1c-4995-8085-3f6effa7dc44', title: 'PATENT_TITLE_2033' },
                { id: 'ce7a984b-a182-48f0-a958-dc9af0cdd399', title: 'PATENT_TITLE_5519' },
            ]}
        />
    </Box>
)

export default App