import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '03452f7b-d757-45f5-a25a-27c10029566f', title: 'PATENT_TITLE_6612' },
                { id: '6954181f-aace-472c-a483-7bd408dc70ba', title: 'PATENT_TITLE_7470' },
                { id: 'c05818e2-f861-4862-83d8-6aedd97ff96d', title: 'PATENT_TITLE_3915' },
                { id: '57ce3e9f-17ff-486b-806e-e91b71e8b50f', title: 'PATENT_TITLE_6554' },
                { id: '09eeaa91-d02b-4919-b386-cdaa2fe171d1', title: 'PATENT_TITLE_6026' },
                { id: 'b5c6447e-dddc-467b-9c9c-d023f0ffad7d', title: 'PATENT_TITLE_7726' },
                { id: 'a76f624c-7ab7-4ee6-ad7e-c457a84413d7', title: 'PATENT_TITLE_1351' },
                { id: '7069a902-9f76-472a-a3b3-e9e2d4428ad3', title: 'PATENT_TITLE_6431' },
                { id: 'fd2506cf-1f82-43ec-966f-aa5b838e10f4', title: 'PATENT_TITLE_8198' },
                { id: '4421305d-6074-4338-9a69-ecd2718c2b26', title: 'PATENT_TITLE_6674' },
            ]}
        />
    </Box>
)

export default App