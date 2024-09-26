import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4379cceb-aa44-47cf-9d71-4090bccea0d6', title: 'PATENT_TITLE_2670' },
                { id: 'f9081d80-0a52-45e8-8b9c-dbc57f09851f', title: 'PATENT_TITLE_2300' },
                { id: '1b29afae-0686-4570-b6da-78a2fb685dc3', title: 'PATENT_TITLE_8448' },
                { id: 'b1168233-596d-4171-a2dd-a57e5b1adc0b', title: 'PATENT_TITLE_7049' },
                { id: 'dd23a084-dd8a-46f2-bec2-9dcebec05994', title: 'PATENT_TITLE_4260' },
                { id: '3ba34a11-6707-4151-9c8c-3db45e21276c', title: 'PATENT_TITLE_7757' },
                { id: 'deab9da2-4330-468d-94f0-2e6bdba0082f', title: 'PATENT_TITLE_4323' },
                { id: 'a965b45a-5b28-4fc9-b140-311a7b45a267', title: 'PATENT_TITLE_1729' },
                { id: 'd7a2d676-3564-4987-a4f4-e45156fec728', title: 'PATENT_TITLE_8703' },
                { id: '76a4b7b5-e309-4992-a5c4-28ad13678d9d', title: 'PATENT_TITLE_4273' },
            ]}
        />
    </Box>
)

export default App