import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '521215e6-650d-4b29-bc1e-bda34b72c035', title: 'PATENT_TITLE_5397' },
                { id: '49d7225c-c753-406e-ac72-a56e46759a6f', title: 'PATENT_TITLE_8751' },
                { id: 'd8e24a0f-1776-4b69-9a08-22fdfa40bda0', title: 'PATENT_TITLE_5206' },
                { id: '16cfba77-b5ea-478f-9d21-819b1899fd00', title: 'PATENT_TITLE_5011' },
                { id: 'cd15fbe6-c537-4412-a63d-08d03fd9232b', title: 'PATENT_TITLE_8778' },
                { id: 'fe8f61b3-dd23-486b-b468-162371dc93bd', title: 'PATENT_TITLE_3876' },
                { id: '46660879-fb59-41e1-a356-5d3d05510da6', title: 'PATENT_TITLE_5718' },
                { id: '4b78233d-d058-45aa-8670-e97c3c7a11e7', title: 'PATENT_TITLE_2484' },
                { id: '85f18a72-ef07-495e-b0f5-c2556e0b62ff', title: 'PATENT_TITLE_6593' },
                { id: 'ce8224cf-01ee-453c-817a-e776340ac07d', title: 'PATENT_TITLE_5554' },
            ]}
        />
    </Box>
)

export default App