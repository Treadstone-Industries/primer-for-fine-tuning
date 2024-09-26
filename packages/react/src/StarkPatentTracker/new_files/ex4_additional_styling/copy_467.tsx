import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7f16679d-2019-4f7e-8009-a1859d12d800', title: 'PATENT_TITLE_6776' },
                { id: 'd67f6317-b7a4-4e27-9994-edf37ad8388b', title: 'PATENT_TITLE_2936' },
                { id: '7eeaa49a-96f4-4e87-be26-e7a066d84f9e', title: 'PATENT_TITLE_3598' },
                { id: 'ab1be73b-ff8c-4a79-a79a-b4ed049a4fe8', title: 'PATENT_TITLE_7115' },
                { id: 'acf4d343-169a-4e88-bab6-68f94efc4f7f', title: 'PATENT_TITLE_4215' },
                { id: 'cfb30198-ac07-4094-8081-c896b04153b3', title: 'PATENT_TITLE_5115' },
                { id: '4a8dfcc7-d3d4-4386-a280-96ecd87f83d0', title: 'PATENT_TITLE_3287' },
            ]}
        />
    </Box>
)

export default App