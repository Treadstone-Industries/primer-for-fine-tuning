import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6dfe377a-54a5-40ba-aeb2-562082988795', title: 'PATENT_TITLE_4303' },
            { id: 'b728ac20-c45c-47d9-8f97-fc3d60678cf7', title: 'PATENT_TITLE_1426' },
            { id: '44fd4573-4a4d-4b99-a818-284b05650056', title: 'PATENT_TITLE_1193' },
            { id: 'b9850869-8726-495d-82bc-348ed7e3dd99', title: 'PATENT_TITLE_2226' },
        ]}
    />
)

export default App