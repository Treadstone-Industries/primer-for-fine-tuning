import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c1d9a69e-4414-4bab-8b8d-46d35dfcb2ae', title: 'PATENT_TITLE_2189' },
        { id: 'f62d8288-ccbe-43bf-88c8-b2855876bd2a', title: 'PATENT_TITLE_5220' },
        { id: 'e57639d6-0490-4773-8eed-0dcd5d77ee02', title: 'PATENT_TITLE_5909' },
        { id: '1fac9562-6b4b-4c1f-8b9d-d5c808f40cd1', title: 'PATENT_TITLE_8463' },
        { id: '9e436d3f-698c-40e7-a44a-76887829c85b', title: 'PATENT_TITLE_4440' },
        { id: '2990562b-cf36-43a8-bbfa-872431945ec0', title: 'PATENT_TITLE_8956' },
        { id: 'f23b1972-49da-4f82-9d37-ba7f9a1bb673', title: 'PATENT_TITLE_9031' },
        { id: 'a501f2fb-e64e-4823-9823-e6dc5a3db696', title: 'PATENT_TITLE_1602' },
        { id: '8019bf26-4fb7-4963-83b9-1636452b8ff9', title: 'PATENT_TITLE_7856' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App