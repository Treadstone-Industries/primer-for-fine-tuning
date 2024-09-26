import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e8ed8433-6f7e-4f31-8af3-2dc194d57a90', title: 'PATENT_TITLE_1085' },
                { id: '54ad8ec0-86dc-428d-b802-0715fb977c6f', title: 'PATENT_TITLE_1461' },
                { id: 'bbe0151e-9995-4dd2-9677-11b234725912', title: 'PATENT_TITLE_6627' },
                { id: 'c696cd74-f8b1-426e-a045-d0c09dbeefe2', title: 'PATENT_TITLE_5230' },
                { id: '3725c2ef-9048-4f10-aa1c-349bb0d27205', title: 'PATENT_TITLE_4017' },
                { id: 'ac41da12-c9fd-4a38-ba93-5e75591da8d2', title: 'PATENT_TITLE_2199' },
                { id: '5a03d0a1-f396-405e-8f38-bcc9c6cd3cae', title: 'PATENT_TITLE_5939' },
                { id: 'f056e47a-2831-4c86-8a71-b913e66a9546', title: 'PATENT_TITLE_6709' },
                { id: '74d4d94c-5f2f-44ae-bbcf-4b921e88ab65', title: 'PATENT_TITLE_6165' },
                { id: 'ab3a35a8-5452-480b-97a7-39b122335849', title: 'PATENT_TITLE_1684' },
            ]}
        />
    </Box>
)

export default App