import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ffc346ef-727a-4b97-86ff-3d671b319070', title: 'PATENT_TITLE_4587' },
                { id: '7f043f92-4b6f-4ac9-96e5-d63050379721', title: 'PATENT_TITLE_6713' },
                { id: '4ee9b15f-053f-4e83-8607-b00f0886f40d', title: 'PATENT_TITLE_4021' },
                { id: 'cedb1d39-2528-4176-9abf-54ad38d7dc48', title: 'PATENT_TITLE_2925' },
                { id: '1e8dc888-caf0-4d09-a0e2-afad6cb536b0', title: 'PATENT_TITLE_2747' },
                { id: '6c045e17-c356-40de-a101-81f2d9fcbf2d', title: 'PATENT_TITLE_7373' },
                { id: 'fa070816-be2e-486c-baf9-5f090f01f04f', title: 'PATENT_TITLE_5148' },
                { id: '9762649b-6949-4a89-a0b7-a7b5cd95b0de', title: 'PATENT_TITLE_9011' },
                { id: '2f6dd430-1486-4cd9-a03a-827dc27b1637', title: 'PATENT_TITLE_7061' },
                { id: 'd56a3f5c-d6a6-469c-862d-4099bd527571', title: 'PATENT_TITLE_7713' },
            ]}
        />
    </Box>
)

export default App