import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a55de24c-77de-475b-9933-4c9eb60377bf', title: 'PATENT_TITLE_6373' },
        { id: '97866edd-0891-48e3-bbd3-c1bc7cfd51b2', title: 'PATENT_TITLE_5205' },
        { id: '0ab9ff7e-5064-4081-b978-802c8f04cece', title: 'PATENT_TITLE_6193' },
        { id: '29a59461-61cb-4009-add6-d017732c1212', title: 'PATENT_TITLE_3268' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App