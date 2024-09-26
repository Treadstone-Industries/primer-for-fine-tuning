import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f468f475-2148-4384-a1a8-f8453dc597e5', title: 'PATENT_TITLE_2706' },
                { id: '63f92869-7f1c-4eb4-aafc-bc6b0bd69cf1', title: 'PATENT_TITLE_6165' },
                { id: '57e67b00-06e9-492d-9aa6-407b71c275cc', title: 'PATENT_TITLE_3314' },
                { id: 'a815fedc-8af5-4e23-bda4-266d00a08ccd', title: 'PATENT_TITLE_9946' },
                { id: '8222cdb9-11c5-46cc-886b-e273dfe71b75', title: 'PATENT_TITLE_6793' },
                { id: 'f58766c0-1635-4dce-97cc-5354bafe9e82', title: 'PATENT_TITLE_6109' },
                { id: '39386168-faca-4bfb-bc15-67c75d6d56c1', title: 'PATENT_TITLE_3551' },
            ]}
        />
    </Box>
)

export default App