import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '47ee03e9-0486-43a0-92cc-3db5151789ac', title: 'PATENT_TITLE_4304' },
        { id: '2581c5b8-2934-4302-a7e2-484c772819a9', title: 'PATENT_TITLE_2350' },
        { id: 'f7698745-e1e5-4e10-8f43-fb58b6adc042', title: 'PATENT_TITLE_8942' },
        { id: '23906d56-6c1e-4ef6-ae2b-b1de7af8d814', title: 'PATENT_TITLE_9417' },
        { id: '932bceb6-c4b0-40cd-93b1-5f5595eb1931', title: 'PATENT_TITLE_5013' },
        { id: 'f6dc39cc-ebfe-491b-b55a-6169e80bc17e', title: 'PATENT_TITLE_7860' },
        { id: '5df9e4e0-9416-4ca1-a491-1b0bded70a89', title: 'PATENT_TITLE_1826' },
        { id: '6f0e5fa2-62eb-4b0a-a6fe-c5863a9f3fa8', title: 'PATENT_TITLE_2055' },
        { id: '98e3ae2b-7ad1-4a16-a07b-5a067f35a6a5', title: 'PATENT_TITLE_1023' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App