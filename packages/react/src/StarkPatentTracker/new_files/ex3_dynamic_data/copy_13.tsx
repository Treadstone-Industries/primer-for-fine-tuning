import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '16cd07a1-70e1-4c81-a4f0-5ac207aae8bc', title: 'PATENT_TITLE_1670' },
        { id: '99b943fa-dc96-4350-a1ee-8dd3abf39a9d', title: 'PATENT_TITLE_2595' },
        { id: '55a30fdf-f745-4080-bd38-4ed43a548159', title: 'PATENT_TITLE_7096' },
        { id: '0eebf366-9733-4df8-9996-13fa4a7ac6e7', title: 'PATENT_TITLE_5422' },
        { id: '53605a65-3b13-4b8b-b7e8-d050fb7e3c28', title: 'PATENT_TITLE_6612' },
        { id: '1146faed-9325-4a84-9e76-c111e42f25b3', title: 'PATENT_TITLE_1410' },
        { id: '78332b69-bfbb-462f-bad6-0e13fbdcf646', title: 'PATENT_TITLE_1571' },
        { id: '736e263d-f3cd-4693-a95f-d1f5158d657b', title: 'PATENT_TITLE_8778' },
        { id: '50078df6-c531-4825-99b0-b14d29d8b5ad', title: 'PATENT_TITLE_9131' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App