import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7c54ce4b-94c2-413b-8323-bc5045adb119', title: 'PATENT_TITLE_6111' },
                { id: '6d04c407-97c6-4e08-b62c-451de3aee743', title: 'PATENT_TITLE_2146' },
                { id: '2be79c52-7b9f-429a-a79b-394e85e1e464', title: 'PATENT_TITLE_8211' },
            ]}
        />
    </Box>
)

export default App