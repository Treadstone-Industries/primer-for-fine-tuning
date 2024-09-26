import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a8cfc631-ae79-489c-9f66-66917aaf2f6e', title: 'PATENT_TITLE_4893' },
                { id: '08a8d815-7d0b-40c4-aafa-05ac9fe39537', title: 'PATENT_TITLE_8201' },
                { id: '8e229a20-ac19-4fbe-b269-172055b98144', title: 'PATENT_TITLE_7216' },
                { id: '0455b721-68bf-46ca-9f46-c51662f22ea6', title: 'PATENT_TITLE_6390' },
                { id: '603ef6f2-3a4a-4ecc-a614-ed3762ea4365', title: 'PATENT_TITLE_6749' },
                { id: '44ac46ac-726a-4046-8e1e-6770b5977668', title: 'PATENT_TITLE_5364' },
                { id: 'b7e1a0bb-b117-4c5b-b669-06220ed104e5', title: 'PATENT_TITLE_8992' },
                { id: 'ebc71413-0763-4dba-af71-b7b0f45d1678', title: 'PATENT_TITLE_3213' },
            ]}
        />
    </Box>
)

export default App