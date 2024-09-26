import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ed9402f3-2302-4fc0-8b20-c6f0ba122747', title: 'PATENT_TITLE_4530' },
                { id: '8951265c-030b-43b5-868e-29f7ac9a8521', title: 'PATENT_TITLE_5737' },
                { id: '659407b5-b4e6-4363-b5cd-ac1fa046f9f5', title: 'PATENT_TITLE_9682' },
                { id: '8ae52188-9d02-4fdf-aa22-eec8cb4d097f', title: 'PATENT_TITLE_7587' },
                { id: '75505995-b20b-432c-a590-1aa962a4a187', title: 'PATENT_TITLE_7750' },
            ]}
        />
    </Box>
)

export default App