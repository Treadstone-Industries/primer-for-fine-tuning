import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3af7eb6f-460d-4ecf-af14-399aa9d5ea49', title: 'PATENT_TITLE_9684' },
                { id: '7b978e10-e6b6-4491-93b0-53eec4d19755', title: 'PATENT_TITLE_4399' },
                { id: '976c1945-ac6e-4382-b20a-1fba358b964e', title: 'PATENT_TITLE_2718' },
                { id: '055db424-50b3-4281-ac4f-357984fd3aab', title: 'PATENT_TITLE_5312' },
            ]}
        />
    </Box>
)

export default App