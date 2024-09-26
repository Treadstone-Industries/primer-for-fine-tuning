import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '65572286-7ce6-4b09-9212-acfc82fd945b', title: 'PATENT_TITLE_2525' },
                { id: 'c77a0117-8501-491b-ac73-6f229610d663', title: 'PATENT_TITLE_7011' },
                { id: 'df4b1324-a8ce-4177-900a-3fa4f177022f', title: 'PATENT_TITLE_6449' },
                { id: '5ec3119a-09d4-4034-86d2-b7dfbd737d7b', title: 'PATENT_TITLE_9921' },
                { id: '39ba9d91-ec8a-48d8-9c72-7951d5bc3966', title: 'PATENT_TITLE_2122' },
            ]}
        />
    </Box>
)

export default App