import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8ae06c01-3122-448b-ae57-c498e46acfab', title: 'PATENT_TITLE_4790' },
                { id: '0200d488-91ca-462b-9a51-4f447e01ff57', title: 'PATENT_TITLE_6155' },
                { id: '718b7740-92a0-4340-9fca-9198ef3d13ea', title: 'PATENT_TITLE_4763' },
                { id: 'd2658433-fa64-49b8-87a6-e276b9fc11db', title: 'PATENT_TITLE_7411' },
                { id: '3a2f63cb-59a1-4047-a49e-1e113a055b8b', title: 'PATENT_TITLE_3699' },
                { id: 'a52cd39b-c416-4ee8-ac94-a92575ade303', title: 'PATENT_TITLE_5054' },
                { id: '4260885d-0715-4948-9322-b737a71022bd', title: 'PATENT_TITLE_1498' },
                { id: '15f07a6c-8ace-433d-a72d-1e59c7347722', title: 'PATENT_TITLE_6021' },
                { id: '3da53ef5-df4d-4e4f-93c7-6f7679c231af', title: 'PATENT_TITLE_3208' },
            ]}
        />
    </Box>
)

export default App