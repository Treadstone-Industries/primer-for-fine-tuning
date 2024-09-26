import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a6117577-3837-4139-9a05-10fe391e6645', title: 'PATENT_TITLE_4906' },
                { id: '8a8a97f0-6c95-4f59-972e-724dd8c3e737', title: 'PATENT_TITLE_7195' },
                { id: '7a4b1ab8-ab22-4bad-bed9-c6d3840a1230', title: 'PATENT_TITLE_2215' },
                { id: 'ab8d1b66-7d39-4d61-88b3-a02e6f7bea18', title: 'PATENT_TITLE_8995' },
                { id: '6170db4d-acb1-4d71-ab79-81e5fab1377e', title: 'PATENT_TITLE_8553' },
                { id: 'eff4761f-def5-4d37-9d91-0d4419b3c3c9', title: 'PATENT_TITLE_8794' },
                { id: 'a3e2ee6c-9420-41e0-a4f3-2572a1ddb0f9', title: 'PATENT_TITLE_1719' },
                { id: '2128c9b7-02b8-4995-8222-f2b358a5c5dd', title: 'PATENT_TITLE_5948' },
                { id: '8b2bc87c-d19c-4cde-9228-5663c1034c87', title: 'PATENT_TITLE_1221' },
            ]}
        />
    </Box>
)

export default App