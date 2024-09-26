import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '28dac8fb-0019-4627-96e2-1394eb95bee5', title: 'PATENT_TITLE_9533' },
        { id: 'ca5864f7-f367-4281-b240-77912590827a', title: 'PATENT_TITLE_4373' },
        { id: 'a645cd82-3827-471c-b43e-74106778ff8f', title: 'PATENT_TITLE_1939' },
        { id: 'bd2a96a8-ab0c-410d-9a36-627dcc095656', title: 'PATENT_TITLE_3621' },
        { id: '9a4954c6-46ed-4103-aea8-f5d0e3a8eea2', title: 'PATENT_TITLE_4584' },
        { id: 'bfb46572-488b-4e34-9cfa-66021bdbb7f7', title: 'PATENT_TITLE_1792' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App