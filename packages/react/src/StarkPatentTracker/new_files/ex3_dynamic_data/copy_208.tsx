import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1b284023-cc93-4e91-b1b1-ef1852e1e433', title: 'PATENT_TITLE_8690' },
        { id: '9d39248a-12b2-41b4-ad35-f808854a6a6a', title: 'PATENT_TITLE_9675' },
        { id: 'a5b335de-0af3-441b-ab49-a1dd141a97ff', title: 'PATENT_TITLE_6275' },
        { id: 'ff5adac5-c0e3-4d27-b279-32c9eb79f003', title: 'PATENT_TITLE_1965' },
        { id: 'd06944a1-afa9-485f-96b8-d2c79e6ee5f6', title: 'PATENT_TITLE_4047' },
        { id: '58fe479f-5413-4bc3-affe-ca28018e573b', title: 'PATENT_TITLE_2890' },
        { id: 'e5e4e1cb-f3c7-409f-bcef-20b81d300e7d', title: 'PATENT_TITLE_3913' },
        { id: '7d5899ce-189d-4986-9c3c-111674a60c68', title: 'PATENT_TITLE_1504' },
        { id: '40233202-34e4-44d6-b589-e0b15cb89e4f', title: 'PATENT_TITLE_3400' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App