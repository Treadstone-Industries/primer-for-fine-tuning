import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b96eebc0-f1d9-471a-9c67-8dd70da77ca5', title: 'PATENT_TITLE_7384' },
                { id: '89d8d258-c2f8-4130-b633-eb53967bd636', title: 'PATENT_TITLE_1025' },
                { id: '46d7b597-f264-4b33-b1c5-b3238ab5d92b', title: 'PATENT_TITLE_4722' },
                { id: '75cc42c9-d271-4688-8574-b8d8f73de1d5', title: 'PATENT_TITLE_6738' },
                { id: 'e3d41e75-cd94-44dd-b819-ff879d5ee394', title: 'PATENT_TITLE_9770' },
                { id: '813ef971-22e6-4118-9dde-b632be1c1bb1', title: 'PATENT_TITLE_8762' },
                { id: 'a4a114c7-181d-491b-b485-16ec0d9a77d1', title: 'PATENT_TITLE_7078' },
            ]}
        />
    </Box>
)

export default App