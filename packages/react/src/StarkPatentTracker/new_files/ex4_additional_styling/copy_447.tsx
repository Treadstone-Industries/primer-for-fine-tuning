import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '16501bd8-489b-4389-8478-6bb368faede2', title: 'PATENT_TITLE_4820' },
                { id: 'd8b5f24c-7cb8-4a6b-8fcf-93f65c478e37', title: 'PATENT_TITLE_4952' },
                { id: '64861b14-548f-4eb1-8f00-49f61bcd8213', title: 'PATENT_TITLE_4100' },
                { id: 'ca534009-43ec-432d-b977-76c1182a7f40', title: 'PATENT_TITLE_5458' },
                { id: '8cb1947f-1ea0-43f6-af95-2641396ae23f', title: 'PATENT_TITLE_5898' },
                { id: '99cd7f3c-bb2c-4150-9e47-b1f57f5f22ae', title: 'PATENT_TITLE_1930' },
                { id: 'd8acb199-111b-4f1b-8c9b-4836756a3485', title: 'PATENT_TITLE_5915' },
                { id: 'e4baa3f1-6107-41d5-8e1c-aa999756264e', title: 'PATENT_TITLE_8837' },
            ]}
        />
    </Box>
)

export default App