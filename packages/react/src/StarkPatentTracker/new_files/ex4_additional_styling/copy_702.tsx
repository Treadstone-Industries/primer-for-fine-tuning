import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a3a78073-bc21-4451-b3e1-04de5ab2051d', title: 'PATENT_TITLE_2220' },
                { id: '7939c6ff-faa8-4d8e-89d3-0dcd5b4f9440', title: 'PATENT_TITLE_8088' },
                { id: 'ded39ef6-cec6-43d1-b83b-fa0537150fce', title: 'PATENT_TITLE_5900' },
                { id: '481e42c2-3ddb-4ea5-90e8-5e5b89b33b1f', title: 'PATENT_TITLE_5419' },
                { id: '78465023-ff00-430b-8148-d79a89f04ccd', title: 'PATENT_TITLE_8601' },
            ]}
        />
    </Box>
)

export default App