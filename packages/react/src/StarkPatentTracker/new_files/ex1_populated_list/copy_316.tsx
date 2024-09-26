import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd3730b4a-f187-4475-9e49-481bc20470e5', title: 'PATENT_TITLE_9923' },
            { id: 'e5937cd6-ebd9-4384-8c40-616b20889d2c', title: 'PATENT_TITLE_8094' },
        ]}
    />
)

export default App