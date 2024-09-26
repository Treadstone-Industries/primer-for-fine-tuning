import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1ce9ff92-2f6e-48dc-891a-82958bed635b', title: 'PATENT_TITLE_9658' },
        { id: '6c90203f-3267-4fcf-9874-281adc8d9e09', title: 'PATENT_TITLE_2876' },
        { id: '4d8a0cdc-81f5-40d1-a807-d6f56d7aae10', title: 'PATENT_TITLE_3622' },
        { id: '61506d9d-35b5-4c2d-ab85-11efea60ce0b', title: 'PATENT_TITLE_4889' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App