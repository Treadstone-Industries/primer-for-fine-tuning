import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '17a5dfbc-3588-46c8-926d-a57440ccaaf5', title: 'PATENT_TITLE_7708' },
                { id: 'a263c1e7-1701-4189-925d-aefcec2ef1fb', title: 'PATENT_TITLE_5601' },
                { id: 'dff846d6-f10a-407c-9edf-e9b5df4dd575', title: 'PATENT_TITLE_3239' },
                { id: '2e056ea3-b928-4a96-968e-d5db5bcab0bb', title: 'PATENT_TITLE_1509' },
                { id: 'd7af3521-b728-4c03-a3d9-dd4d89eb9bfe', title: 'PATENT_TITLE_5507' },
                { id: 'e4a5985c-0e4d-47da-936c-f24058481dd6', title: 'PATENT_TITLE_4447' },
                { id: '84da9ae5-4fb1-407b-9a9c-23ddd15631a2', title: 'PATENT_TITLE_8900' },
                { id: '707ba108-879e-47e8-acac-3d15e8e3952a', title: 'PATENT_TITLE_6142' },
                { id: '76d69173-7c1a-43b5-b273-a573a7daad8d', title: 'PATENT_TITLE_6255' },
                { id: 'eca7d89d-157c-4213-b0b9-268fdf7dfc87', title: 'PATENT_TITLE_8920' },
            ]}
        />
    </Box>
)

export default App