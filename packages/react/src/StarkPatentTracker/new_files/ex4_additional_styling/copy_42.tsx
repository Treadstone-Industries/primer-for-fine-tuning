import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6f4bed56-acf3-4fd6-9d1c-f9695bb1ce56', title: 'PATENT_TITLE_2172' },
                { id: '6dcfc29f-7e38-40df-905a-2163d7256118', title: 'PATENT_TITLE_4749' },
                { id: 'd95b8cad-ad3f-478a-b1a5-ae4d718c8227', title: 'PATENT_TITLE_4148' },
                { id: 'b7298ab7-6c5c-4b75-8625-e13436bc79a2', title: 'PATENT_TITLE_8178' },
            ]}
        />
    </Box>
)

export default App