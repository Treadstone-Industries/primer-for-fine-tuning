import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8bae6cb2-9a40-48fb-b342-f9e2516782c0', title: 'PATENT_TITLE_8167' },
                { id: '5bb3ca51-e6de-4bec-ba46-e300b1181394', title: 'PATENT_TITLE_9225' },
                { id: 'cfc00506-9089-4c04-9147-fb092c9182e4', title: 'PATENT_TITLE_8711' },
                { id: '1fdf6c63-4340-45ba-aa56-be1ea48666a4', title: 'PATENT_TITLE_6503' },
                { id: 'b41ae2f9-7e8e-4862-9b74-0c790e30e50f', title: 'PATENT_TITLE_3302' },
                { id: 'cc198cf4-ab7c-4b03-84b4-3e727e30e431', title: 'PATENT_TITLE_9713' },
                { id: 'cab78b49-6e30-4a20-94c9-cad833e196fb', title: 'PATENT_TITLE_4611' },
                { id: '839aac72-1574-484c-86c5-177abdabc2e6', title: 'PATENT_TITLE_2219' },
                { id: 'f58187bd-e116-4aa5-a098-066725c1f72d', title: 'PATENT_TITLE_5399' },
            ]}
        />
    </Box>
)

export default App