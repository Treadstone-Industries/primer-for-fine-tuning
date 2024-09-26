import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c794e645-55ae-4c0d-b383-1b6bb332358b', title: 'PATENT_TITLE_3686' },
                { id: '544ea459-86c6-469d-9609-e88fe86be6f2', title: 'PATENT_TITLE_2806' },
                { id: '8f642e18-11d5-4998-b40e-e631c7e4f875', title: 'PATENT_TITLE_5782' },
                { id: '0899d1e4-2212-47d3-8368-b9bebbdb6727', title: 'PATENT_TITLE_5625' },
                { id: 'e9d9a6bb-ed4a-40d9-9ef5-ee4a6a81ab6e', title: 'PATENT_TITLE_2402' },
                { id: '7463aa1b-b2f2-45f5-8947-04ceeb16fd05', title: 'PATENT_TITLE_4468' },
                { id: 'f86f4fce-c4ab-4805-86fe-349ca7363431', title: 'PATENT_TITLE_3985' },
                { id: 'b7f311e9-0546-41ee-a174-faac45cf1b77', title: 'PATENT_TITLE_7828' },
            ]}
        />
    </Box>
)

export default App