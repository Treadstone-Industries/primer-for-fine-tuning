import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4fc0416b-1b73-4fea-9df4-93760b045891', title: 'PATENT_TITLE_6234' },
                { id: 'b775ae10-db9a-412a-971f-1dc2de108403', title: 'PATENT_TITLE_8270' },
                { id: '9a6fec28-ac9a-48b2-aa33-b77cac69d350', title: 'PATENT_TITLE_3060' },
                { id: 'af4687f4-331d-4e4c-90f9-246fc005d6c3', title: 'PATENT_TITLE_3200' },
                { id: '0b4b018f-b550-4455-b316-a3e519e4cbb7', title: 'PATENT_TITLE_8232' },
                { id: '93e29d3b-e953-468c-b235-a1326e6f0d60', title: 'PATENT_TITLE_1891' },
                { id: '38173cab-e98a-4a08-a9c9-95cfa56fbdd0', title: 'PATENT_TITLE_3921' },
                { id: '79a9c190-34bb-4d9d-a56b-d9088984cdae', title: 'PATENT_TITLE_6895' },
                { id: '6620193a-90cb-4d22-90cf-f7f356482bf1', title: 'PATENT_TITLE_9720' },
            ]}
        />
    </Box>
)

export default App