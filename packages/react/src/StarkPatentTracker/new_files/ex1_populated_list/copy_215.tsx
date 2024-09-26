import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '61ce6969-694a-46ed-abfb-7a5a6ad10bc8', title: 'PATENT_TITLE_5410' },
            { id: '346f22ef-ec45-4093-8067-cadcf9227eb8', title: 'PATENT_TITLE_6195' },
            { id: 'df7628d3-ef0e-4bae-9d23-6f93b497cd1e', title: 'PATENT_TITLE_6417' },
            { id: '3c8055b8-b135-4a38-bd01-68d5999afa19', title: 'PATENT_TITLE_6418' },
            { id: '48869601-f51f-4da9-82a8-de34dfb11077', title: 'PATENT_TITLE_3332' },
            { id: '81136889-1189-4fdc-a7f3-732cc094011b', title: 'PATENT_TITLE_8283' },
            { id: '7353dce2-34ac-4b31-b221-f21899861b2f', title: 'PATENT_TITLE_4793' },
            { id: '42eabce3-a02b-4b18-a3cc-df68ccacf4cb', title: 'PATENT_TITLE_2656' },
        ]}
    />
)

export default App