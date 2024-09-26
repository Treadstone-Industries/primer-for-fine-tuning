import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2e3a045b-8b0d-4376-95c0-f0f2e5a15c59', title: 'PATENT_TITLE_3770' },
        { id: 'd11232a5-4705-496a-894e-6a74f29ad3eb', title: 'PATENT_TITLE_1438' },
        { id: 'eb7aadba-6f0c-4e3e-8e34-977452c0468a', title: 'PATENT_TITLE_5746' },
        { id: 'd4bdfe56-2ec1-474c-8c26-67a1348db33d', title: 'PATENT_TITLE_7440' },
        { id: '01f59738-e220-46ad-9288-248a844f1137', title: 'PATENT_TITLE_9265' },
        { id: 'a988e561-8be2-4829-a5e4-e145bfb2b126', title: 'PATENT_TITLE_9136' },
        { id: 'b57293b3-bc96-4d14-9272-f95efda4ea41', title: 'PATENT_TITLE_7938' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App