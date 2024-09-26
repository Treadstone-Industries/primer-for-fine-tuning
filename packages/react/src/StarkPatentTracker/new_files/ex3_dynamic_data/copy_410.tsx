import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0be66c57-6ca6-4f15-b147-ede2f5254a28', title: 'PATENT_TITLE_9743' },
        { id: 'c79fc986-6122-4113-9422-61a073cbb4cc', title: 'PATENT_TITLE_5851' },
        { id: '83281f53-7a59-44fc-a1c8-9c188999bb2f', title: 'PATENT_TITLE_8562' },
        { id: 'f150d49f-dd4f-4ea2-a401-25a84e0fa1d8', title: 'PATENT_TITLE_1784' },
        { id: '392c4d56-5aa9-4c63-830c-cab396377162', title: 'PATENT_TITLE_1845' },
        { id: '7449963f-a1d5-4086-9f01-d89fd76202d3', title: 'PATENT_TITLE_1349' },
        { id: 'a99b79fb-d737-4043-9935-187b69febb06', title: 'PATENT_TITLE_3595' },
        { id: '1dc111a2-bbad-4f53-880f-d74ba495538e', title: 'PATENT_TITLE_8264' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App