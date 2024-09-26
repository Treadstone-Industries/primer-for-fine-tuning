import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '16a8144d-557d-4653-b108-eb89b29a4bc5', title: 'PATENT_TITLE_8206' },
                { id: '837c7063-c1a1-4431-9b1c-5d9d995bceee', title: 'PATENT_TITLE_1113' },
                { id: '872cf152-a991-4700-b8e4-b207e6507c69', title: 'PATENT_TITLE_9416' },
                { id: '91f097c0-fa69-491b-9120-77a651e4a27c', title: 'PATENT_TITLE_8819' },
                { id: 'd485d643-7cec-4eac-b455-276fe1ddb659', title: 'PATENT_TITLE_5155' },
                { id: '070c6fcd-420a-40a3-8062-988dc40ee308', title: 'PATENT_TITLE_5088' },
                { id: '4e982453-64b5-4924-aa8b-3fe70b6c2352', title: 'PATENT_TITLE_6540' },
                { id: 'da9712e1-1df8-4638-bcae-6492106b8562', title: 'PATENT_TITLE_4433' },
            ]}
        />
    </Box>
)

export default App