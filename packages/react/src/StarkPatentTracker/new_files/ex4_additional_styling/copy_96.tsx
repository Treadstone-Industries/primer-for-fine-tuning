import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a7084e7f-d7c4-4a59-a651-f3e37a7ecb13', title: 'PATENT_TITLE_7073' },
                { id: '0366bbbb-3191-4a01-bd7f-9a31521164ed', title: 'PATENT_TITLE_8230' },
                { id: '277cda90-dcd3-4dcc-b715-ed20023370f8', title: 'PATENT_TITLE_2035' },
                { id: '7407aa54-6d76-47ce-bbfc-6451bb22f269', title: 'PATENT_TITLE_4378' },
                { id: '01d99af6-c944-4706-a0c2-680afa15d24c', title: 'PATENT_TITLE_6342' },
                { id: '596c7c90-0857-49f5-a0f8-06c117e8808e', title: 'PATENT_TITLE_6237' },
                { id: '25b76683-7a69-4445-bace-b1c52e337cd4', title: 'PATENT_TITLE_5924' },
            ]}
        />
    </Box>
)

export default App