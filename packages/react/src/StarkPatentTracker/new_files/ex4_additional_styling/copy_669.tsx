import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3f8cc2e4-6f3b-4f64-81ee-13c887301189', title: 'PATENT_TITLE_2804' },
                { id: 'ce9b8f49-6282-4eec-9bab-720608483baf', title: 'PATENT_TITLE_6396' },
                { id: 'b2bd02d6-3ae4-482b-a4fc-6f61f39aedbb', title: 'PATENT_TITLE_4210' },
                { id: '049046cd-b131-453b-854a-b8e09f3c29e9', title: 'PATENT_TITLE_1061' },
                { id: '78cf8dea-c270-4b98-8b86-e586f3838601', title: 'PATENT_TITLE_6125' },
                { id: 'be61779d-b161-44ca-9f33-12e6dda54e05', title: 'PATENT_TITLE_6890' },
                { id: '7f8daadd-3141-4ac4-a1f3-9eb362dd00e1', title: 'PATENT_TITLE_9136' },
            ]}
        />
    </Box>
)

export default App