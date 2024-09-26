import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bfcd9580-df7a-4209-861d-9dccbeab1120', title: 'PATENT_TITLE_3910' },
                { id: '085a1382-17e3-4aba-9ce3-849da788fe23', title: 'PATENT_TITLE_8972' },
                { id: '98946dd6-6dae-4ba5-8163-483e1cb1e5d5', title: 'PATENT_TITLE_6038' },
                { id: 'bb6cf9dc-893c-4385-bca9-099b5dd88526', title: 'PATENT_TITLE_3413' },
                { id: 'bfac3bae-e3ff-47d7-8c4e-a396b92e1279', title: 'PATENT_TITLE_3808' },
                { id: '29d09171-52c9-400d-bd1c-7a0dbef180ed', title: 'PATENT_TITLE_7041' },
                { id: '280e5bfc-9008-4306-8b52-76da4c6f8903', title: 'PATENT_TITLE_3341' },
                { id: '54c2ccc4-3b98-4e75-bb78-286d9a9a1b7a', title: 'PATENT_TITLE_9213' },
            ]}
        />
    </Box>
)

export default App