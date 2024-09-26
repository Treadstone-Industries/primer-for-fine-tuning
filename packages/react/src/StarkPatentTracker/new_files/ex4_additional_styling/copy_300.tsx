import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '32d4a403-6f68-46f1-a4b2-3c3638a1b205', title: 'PATENT_TITLE_8099' },
                { id: '403430e4-e54e-417d-92cd-e913f89ffcbe', title: 'PATENT_TITLE_4546' },
                { id: '5aca5cf5-2325-444e-9212-3dbb08246c03', title: 'PATENT_TITLE_1750' },
                { id: 'a46fd3ee-7d7e-4c2f-aba3-d7a03ac14990', title: 'PATENT_TITLE_9763' },
                { id: '529336e8-8cd2-4182-b9bf-04c511c0c005', title: 'PATENT_TITLE_9267' },
                { id: '4b1e31a2-ce40-41f3-84b6-86a10cdae15b', title: 'PATENT_TITLE_9614' },
                { id: '5cacfe7b-fd5e-4026-9309-1924ec1b199d', title: 'PATENT_TITLE_5589' },
                { id: 'fc0fe014-1d93-46ab-91a6-ed475539a941', title: 'PATENT_TITLE_8873' },
            ]}
        />
    </Box>
)

export default App