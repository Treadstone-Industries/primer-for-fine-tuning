import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '81878af7-c014-4a50-a0b5-5f161b495cb7', title: 'PATENT_TITLE_2304' },
                { id: 'de87915c-f9a2-4bb7-be93-28a0ee22d329', title: 'PATENT_TITLE_7367' },
                { id: '0e063248-cf79-4da2-abe3-eeae598aeab7', title: 'PATENT_TITLE_2577' },
                { id: '34c763b9-be8d-4b51-bad4-238a1ad88683', title: 'PATENT_TITLE_8546' },
                { id: 'dca58913-2e53-483d-af98-96a92d6667f4', title: 'PATENT_TITLE_5573' },
                { id: '85d2897c-99bb-42c8-8cc3-2947f2330a59', title: 'PATENT_TITLE_6616' },
                { id: '56d3a4d6-1f4b-419a-bf86-8d6ec9d0cb0b', title: 'PATENT_TITLE_5978' },
                { id: 'a6d500be-993c-4f38-8483-43f9ec47f3f5', title: 'PATENT_TITLE_2007' },
            ]}
        />
    </Box>
)

export default App