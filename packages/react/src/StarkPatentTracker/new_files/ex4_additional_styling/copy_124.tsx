import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '263e7e1c-37bc-438b-b3d6-fed09d1908af', title: 'PATENT_TITLE_7592' },
                { id: '0731dd19-8479-4e6a-ac5b-86f0d2ba4c8d', title: 'PATENT_TITLE_8813' },
                { id: 'b4c10d4b-6b65-4981-be3c-da30c1cd2d32', title: 'PATENT_TITLE_3570' },
                { id: '3fb727a7-da84-4434-b739-436b15e0cf2a', title: 'PATENT_TITLE_4079' },
                { id: '6873578f-1135-4ad7-a058-b827c760c12f', title: 'PATENT_TITLE_1972' },
                { id: 'ce6b1ed2-5005-4289-9acc-8e86b77cea61', title: 'PATENT_TITLE_6223' },
                { id: '73598531-2bb2-416b-a1e3-9cd73066b99a', title: 'PATENT_TITLE_2515' },
            ]}
        />
    </Box>
)

export default App