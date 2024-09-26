import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2d412b71-30c6-47c1-9c68-608a8c0272a7', title: 'PATENT_TITLE_5473' },
                { id: '5a78f7e3-142f-4077-ba5b-bfb613f2f75e', title: 'PATENT_TITLE_7561' },
                { id: '30ec0a96-4962-47e2-a58d-47d117b1e341', title: 'PATENT_TITLE_5160' },
                { id: '19eb27b1-f518-4c2c-8a01-4826a9edd4c0', title: 'PATENT_TITLE_3024' },
                { id: '42b1efdb-1830-4e18-a799-27358e1b950b', title: 'PATENT_TITLE_2016' },
                { id: '6377a0a9-59b4-4d96-957e-d0895eeaf067', title: 'PATENT_TITLE_2888' },
                { id: 'e1225afe-b952-4f81-bdb3-dd581440e88b', title: 'PATENT_TITLE_1745' },
                { id: '101a4cf9-b69d-4f63-9543-7b8c87cf3207', title: 'PATENT_TITLE_7060' },
                { id: 'e4b467e0-5dc8-4b70-a579-431898df8891', title: 'PATENT_TITLE_2442' },
                { id: 'e3abf2b0-ee00-4c93-9426-73bc63ebe1df', title: 'PATENT_TITLE_1298' },
            ]}
        />
    </Box>
)

export default App