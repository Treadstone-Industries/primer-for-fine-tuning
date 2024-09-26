import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8dfa83ee-652b-41ac-bf24-49040b7629c1', title: 'PATENT_TITLE_9744' },
        { id: '8e163fb4-9a10-4f56-ae9f-498cd61d35c9', title: 'PATENT_TITLE_3388' },
        { id: 'bb3274db-c5b1-4d20-925c-c32119b96257', title: 'PATENT_TITLE_5242' },
        { id: 'c30e4c66-0d31-4732-b712-665ae8e7a5df', title: 'PATENT_TITLE_3870' },
        { id: '507a6690-d2d5-41d1-8ad0-c2154c3dff4d', title: 'PATENT_TITLE_9028' },
        { id: 'd4ded815-484c-40be-b2b5-5eba9d1aad7d', title: 'PATENT_TITLE_8914' },
        { id: '11a87b02-66a5-4983-afb7-6ddaa9ac916f', title: 'PATENT_TITLE_6503' },
        { id: '2be8260b-3818-42bb-b633-6bb9415b8895', title: 'PATENT_TITLE_5557' },
        { id: '065ac273-5570-45b1-823d-131b1710690a', title: 'PATENT_TITLE_1243' },
        { id: '9bea9d10-ac37-4d5a-9f25-a8e26866eb80', title: 'PATENT_TITLE_2461' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App