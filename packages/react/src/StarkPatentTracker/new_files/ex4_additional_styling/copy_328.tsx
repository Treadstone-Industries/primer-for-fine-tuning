import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '82770636-d060-4e43-931c-827d967193e9', title: 'PATENT_TITLE_1248' },
                { id: '920d1be4-65d5-488a-95c0-c312df7326b0', title: 'PATENT_TITLE_8121' },
                { id: '5f3994cd-8dc2-4aac-9a19-d6187659b059', title: 'PATENT_TITLE_6932' },
                { id: '5e257abc-86d0-4d48-9ece-75fac49f59ce', title: 'PATENT_TITLE_1047' },
                { id: '6410a624-a95c-4fde-8038-fe782c38a50e', title: 'PATENT_TITLE_3931' },
                { id: '89cff8d9-0dcd-4918-8720-04c413cf9772', title: 'PATENT_TITLE_8395' },
            ]}
        />
    </Box>
)

export default App