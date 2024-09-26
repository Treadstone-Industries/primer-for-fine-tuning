import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cf622ac0-bf4c-4640-9905-396057a705ed', title: 'PATENT_TITLE_4477' },
                { id: '41e3a7a7-ac7a-4b40-9ba2-25ba6db49f0d', title: 'PATENT_TITLE_2600' },
                { id: 'd4932081-14d6-4020-ab50-97bc85c9e099', title: 'PATENT_TITLE_2046' },
            ]}
        />
    </Box>
)

export default App