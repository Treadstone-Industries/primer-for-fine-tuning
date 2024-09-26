import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '24af9add-1fee-45d0-833c-31f98d282343', title: 'PATENT_TITLE_5201' },
        { id: '388fe0b4-85d0-4450-8075-562773410170', title: 'PATENT_TITLE_8393' },
        { id: 'c1bc8777-9dd4-4512-a320-f56361b071bb', title: 'PATENT_TITLE_3827' },
        { id: '20a8fee4-d32a-4990-97cc-8502859372aa', title: 'PATENT_TITLE_3814' },
        { id: '88c1352f-c391-4a8b-a946-56b7529296a7', title: 'PATENT_TITLE_4697' },
        { id: 'ba9d3311-4503-4617-9e07-57b58528929d', title: 'PATENT_TITLE_2554' },
        { id: '7206bb27-5c32-43b0-80da-860cfd27f315', title: 'PATENT_TITLE_7870' },
        { id: '49e1bae1-9482-4abc-88b6-4e1e144097c7', title: 'PATENT_TITLE_7777' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App