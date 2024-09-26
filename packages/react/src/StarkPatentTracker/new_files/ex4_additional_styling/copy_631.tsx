import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd161ed8d-123d-4515-96c0-5decb37e809e', title: 'PATENT_TITLE_8316' },
                { id: 'e81a7203-7512-4d48-ade0-adae9b13bdfa', title: 'PATENT_TITLE_6704' },
                { id: '11293dc1-d421-4fd7-8cdd-8adb0339b6a3', title: 'PATENT_TITLE_9403' },
                { id: '2c4b3e42-cb82-45ee-878b-520050fbc3ec', title: 'PATENT_TITLE_4188' },
                { id: '4ab67071-2798-472a-96ef-dd4b54bc55a8', title: 'PATENT_TITLE_6433' },
                { id: '1fb76a7a-fcc8-4305-9325-e62bc56eae34', title: 'PATENT_TITLE_9374' },
                { id: 'b6c109fc-c1b8-4dd1-b9ab-1ccc7c7f3a74', title: 'PATENT_TITLE_1231' },
                { id: 'b97fc1db-29c4-48ab-935d-c2c772b28ffe', title: 'PATENT_TITLE_8450' },
                { id: '8cc3e18e-6514-4494-b70b-c3a4c5cb786c', title: 'PATENT_TITLE_6021' },
            ]}
        />
    </Box>
)

export default App