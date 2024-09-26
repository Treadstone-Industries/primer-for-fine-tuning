import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3cacdb57-5084-4816-8adb-8399c82b1d56', title: 'PATENT_TITLE_6855' },
                { id: 'd9e66d66-fb76-4e19-aa92-cc29f1bcdaf5', title: 'PATENT_TITLE_3592' },
                { id: 'ebd452b4-8587-4cf8-bc87-61ec5f6f7cfc', title: 'PATENT_TITLE_9854' },
                { id: '44bc5283-1e80-4145-a888-6bb5ba3b244c', title: 'PATENT_TITLE_7584' },
                { id: '7d69f425-244a-4d21-8066-fb43898905f3', title: 'PATENT_TITLE_6144' },
                { id: 'cd10d32a-3d2b-48e2-b656-19e1b257e489', title: 'PATENT_TITLE_5226' },
                { id: 'f171f663-b970-42ee-a9c9-6233088cd1b4', title: 'PATENT_TITLE_1566' },
                { id: '76ded2d3-a945-4146-a743-2b33d9b24e53', title: 'PATENT_TITLE_9424' },
                { id: 'e3e65f83-f436-48f5-8b4c-9cd98b8d4f61', title: 'PATENT_TITLE_5198' },
            ]}
        />
    </Box>
)

export default App