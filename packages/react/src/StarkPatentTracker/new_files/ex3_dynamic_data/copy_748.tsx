import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5789d748-c0c5-44ae-b28d-13e1c81af7b1', title: 'PATENT_TITLE_8978' },
        { id: 'cd093fa8-445f-4e24-9016-eec58924ad08', title: 'PATENT_TITLE_3837' },
        { id: '2be5e4bc-dc14-4fdf-a619-2f0d70073a49', title: 'PATENT_TITLE_2535' },
        { id: '23315416-2a88-4ee4-ab38-b82bdd6ccfe9', title: 'PATENT_TITLE_4345' },
        { id: '05a07c0f-7b3f-4e58-ab24-23d09bd3aebc', title: 'PATENT_TITLE_9398' },
        { id: 'a26979db-320c-4c07-a8cc-65be53aabd2f', title: 'PATENT_TITLE_9446' },
        { id: '26a74a6b-deac-45bd-bd22-a18af8d9d83d', title: 'PATENT_TITLE_9675' },
        { id: 'bfb889c2-17de-40e9-a309-3012bc244b71', title: 'PATENT_TITLE_4949' },
        { id: '7267eedb-3364-4ccf-9c5a-429ca6518bca', title: 'PATENT_TITLE_8233' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App