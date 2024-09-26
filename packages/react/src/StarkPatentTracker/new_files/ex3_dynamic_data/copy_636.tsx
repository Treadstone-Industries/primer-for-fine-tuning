import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a03b3804-90c7-418f-b6b7-cd1496545442', title: 'PATENT_TITLE_1010' },
        { id: '56b1e04a-52bb-4de5-a266-1ab2dab8aaea', title: 'PATENT_TITLE_5726' },
        { id: '44e1ea6d-e7c8-4a10-8dda-0582e17edefb', title: 'PATENT_TITLE_5759' },
        { id: '03d8c4da-e190-4bf0-88db-58b2a448221d', title: 'PATENT_TITLE_9600' },
        { id: 'fd072ffa-6f9d-4c07-8fc2-9663299741d1', title: 'PATENT_TITLE_7753' },
        { id: 'b6d923b9-212a-4f0a-b02f-66496f03bd79', title: 'PATENT_TITLE_7089' },
        { id: '39b42d2b-76e1-4f12-9faa-d1652d2ef9fe', title: 'PATENT_TITLE_4032' },
        { id: '02291f29-d948-4fae-a4c0-fac536940466', title: 'PATENT_TITLE_8749' },
        { id: 'fb87ebcf-3823-43ed-adbd-e3568a1c02d0', title: 'PATENT_TITLE_4253' },
        { id: 'f57c541b-dac4-4666-ab7f-dc7e3cd3ce0c', title: 'PATENT_TITLE_6759' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App