import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd01657c7-5639-4446-9881-104b1d67b93e', title: 'PATENT_TITLE_2221' },
                { id: '12b84bf3-f6cf-46bf-8d19-2635424cc2c6', title: 'PATENT_TITLE_4452' },
                { id: 'd88e1277-3203-4a8c-8a15-ec34c0c47ab6', title: 'PATENT_TITLE_2020' },
                { id: 'e8a53be6-ea2d-4919-ac45-e86f9aa96319', title: 'PATENT_TITLE_9533' },
                { id: '8656666b-d593-41ff-8116-79f83a845f5f', title: 'PATENT_TITLE_4794' },
                { id: 'ea40f580-e83d-47a2-b89a-462a383c37df', title: 'PATENT_TITLE_8431' },
                { id: '7dc42414-1669-4057-a767-9ddf22967c0a', title: 'PATENT_TITLE_2240' },
            ]}
        />
    </Box>
)

export default App