import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '077eac54-1143-4479-8831-08cc737764ae', title: 'PATENT_TITLE_9931' },
                { id: '57a26a45-7239-4c83-b77a-a3996d2ed75d', title: 'PATENT_TITLE_6651' },
                { id: 'ef7540f6-9c67-4050-935a-42668927cdb3', title: 'PATENT_TITLE_7048' },
            ]}
        />
    </Box>
)

export default App