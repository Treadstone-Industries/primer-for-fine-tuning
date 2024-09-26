import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '384f3ef1-0ac9-4f2e-9231-4d0774b0ecc8', title: 'PATENT_TITLE_2200' },
                { id: '2ea40434-55bf-4292-8da9-163588093cfb', title: 'PATENT_TITLE_9673' },
                { id: 'e2e39669-fce7-4129-93f3-8841c9788186', title: 'PATENT_TITLE_7027' },
                { id: 'b1be8ca0-474b-43f5-8c19-0822abb0fcbe', title: 'PATENT_TITLE_1788' },
                { id: 'd61e52f5-6ad6-47c8-9d03-e48fc5fba0e0', title: 'PATENT_TITLE_3000' },
                { id: '923585ad-8c75-4311-9177-c394cdeaeb8a', title: 'PATENT_TITLE_6858' },
                { id: 'a706af24-1a1e-4e76-8a41-671616bc4cab', title: 'PATENT_TITLE_1815' },
                { id: 'd0a27693-fc03-4bde-810d-7b2ec0639952', title: 'PATENT_TITLE_1793' },
                { id: '071a4f10-da91-4c3e-aeca-acff4f9d71f6', title: 'PATENT_TITLE_9234' },
            ]}
        />
    </Box>
)

export default App