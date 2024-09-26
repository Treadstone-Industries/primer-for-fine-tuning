import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '13f6d17f-63cd-42c6-8b81-03a779bf2b8b', title: 'PATENT_TITLE_7567' },
                { id: '4f623b95-a228-43a1-be95-c12c9d236e22', title: 'PATENT_TITLE_3542' },
                { id: '4eca7dc0-b119-45ca-a1cd-c37149af76fb', title: 'PATENT_TITLE_7479' },
                { id: '2011ac96-e4e3-4dd6-9886-5d545550875f', title: 'PATENT_TITLE_8635' },
                { id: 'b5017778-f683-44f2-8676-261d0e2488f4', title: 'PATENT_TITLE_2421' },
            ]}
        />
    </Box>
)

export default App