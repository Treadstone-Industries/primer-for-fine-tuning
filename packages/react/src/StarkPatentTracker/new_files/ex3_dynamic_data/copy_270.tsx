import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7b22b3c7-8390-44bf-9764-f3b9ddfbdc6c', title: 'PATENT_TITLE_9360' },
        { id: 'f758989b-8461-4a7b-aad7-7a61b57b5a7e', title: 'PATENT_TITLE_9143' },
        { id: 'e2b9203b-4662-439d-8ba4-906a5bb17620', title: 'PATENT_TITLE_2591' },
        { id: '946ebdda-b66e-4039-ac43-b8a018b1b596', title: 'PATENT_TITLE_4206' },
        { id: '50059384-af6c-4717-9977-e2c7bbb6664f', title: 'PATENT_TITLE_3649' },
        { id: 'eee5fb86-1080-4614-83a0-50a83c3a0205', title: 'PATENT_TITLE_9277' },
        { id: '6d39247b-6630-4fc4-a35b-f52c496a2546', title: 'PATENT_TITLE_7508' },
        { id: '9c8b679a-4e70-47eb-a364-ec9747ef0d5b', title: 'PATENT_TITLE_6659' },
        { id: '36fdce89-fa22-4c35-9dd7-eeda9803b581', title: 'PATENT_TITLE_3821' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App