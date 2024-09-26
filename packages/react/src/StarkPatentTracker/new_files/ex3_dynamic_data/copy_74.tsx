import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bebcc769-39c9-4ced-ac4d-485af990a38a', title: 'PATENT_TITLE_2863' },
        { id: '29398b52-2c0c-4979-bc0e-3c686437775f', title: 'PATENT_TITLE_3851' },
        { id: '64a321b0-c9aa-413b-bad2-a1463b0054d3', title: 'PATENT_TITLE_3421' },
        { id: 'e40b4ed3-c4b1-4dfb-bccd-7073f64e6535', title: 'PATENT_TITLE_6033' },
        { id: '9d2b02a9-3283-412c-a09c-f3039018dd2f', title: 'PATENT_TITLE_9202' },
        { id: 'f0d0da27-6492-405c-8a7f-52e30ec542aa', title: 'PATENT_TITLE_3445' },
        { id: '1d0f9afd-f406-4a1d-b18f-22f8361546ca', title: 'PATENT_TITLE_5386' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App