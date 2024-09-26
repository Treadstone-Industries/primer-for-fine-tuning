import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7cd21f54-7354-4fa4-8313-47b5b7dac0de', title: 'PATENT_TITLE_9409' },
        { id: 'ae1b018a-aa87-45bc-8260-0246647ddbba', title: 'PATENT_TITLE_8673' },
        { id: '724d2569-0ef5-4a3e-a2c1-90be2cfc4b1e', title: 'PATENT_TITLE_2787' },
        { id: '0ae87cc9-b8fc-4173-8653-9112a3d58fc3', title: 'PATENT_TITLE_9027' },
        { id: '5fa44ac1-4e9a-4f8e-bc52-0726541fee63', title: 'PATENT_TITLE_8055' },
        { id: '94713f71-d0a7-4c7f-8c12-4b0a281cdfe6', title: 'PATENT_TITLE_6850' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App