import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '98a4d7e9-96a6-44ff-9b56-d63b3d313075', title: 'PATENT_TITLE_2992' },
                { id: 'dc18b0b6-f173-42a0-9044-dbfe06a95b20', title: 'PATENT_TITLE_4687' },
                { id: 'c9e97e10-a9ac-4333-9326-815509b79f08', title: 'PATENT_TITLE_4502' },
                { id: 'fa526dde-ee06-42cf-a868-71e310cef454', title: 'PATENT_TITLE_4770' },
                { id: 'f6131c0d-d067-45e8-918e-c35ea3be0381', title: 'PATENT_TITLE_7923' },
                { id: '78adb931-4aa7-4463-bc10-63845b71c7bf', title: 'PATENT_TITLE_8279' },
                { id: '53847927-c77b-4c63-9790-79247f361bf7', title: 'PATENT_TITLE_7556' },
                { id: '52ca5f02-b352-4639-9335-7d842d03c00f', title: 'PATENT_TITLE_8534' },
            ]}
        />
    </Box>
)

export default App