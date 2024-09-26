import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5cad6855-f6b4-4035-a628-842e4090abe7', title: 'PATENT_TITLE_7542' },
                { id: 'dd59fcb9-f7f0-4235-8ff2-ac2b3ac43947', title: 'PATENT_TITLE_9216' },
                { id: '1bdfd9e7-e90a-4e56-9007-6f6ae2699c98', title: 'PATENT_TITLE_8369' },
                { id: '52fe4913-e57a-4c13-ac78-3ea311440ebd', title: 'PATENT_TITLE_5988' },
                { id: 'b4480175-7b40-4fdc-bd54-99e65c02444a', title: 'PATENT_TITLE_6637' },
                { id: 'a1315fed-941b-4666-b757-3c9549e5d3f5', title: 'PATENT_TITLE_7934' },
                { id: 'f7ce7600-e09e-48e8-951b-44ca8e7245fc', title: 'PATENT_TITLE_1037' },
                { id: 'd43158d9-e299-4070-b980-81927fc1297b', title: 'PATENT_TITLE_3016' },
            ]}
        />
    </Box>
)

export default App