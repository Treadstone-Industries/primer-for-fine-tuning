import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c6204b7c-d40a-4b58-a655-66545b7200a7', title: 'PATENT_TITLE_2024' },
        { id: '4bb11d09-2f61-4895-ac8d-a7c9fbd236f4', title: 'PATENT_TITLE_2815' },
        { id: 'c14ba108-7e19-4c46-a8b2-786fd32aad0e', title: 'PATENT_TITLE_6809' },
        { id: '61fad623-ed67-42b8-8c02-3283e1fc1954', title: 'PATENT_TITLE_3062' },
        { id: '1b9941f3-602a-4072-a4f9-4dfb0342c80a', title: 'PATENT_TITLE_9499' },
        { id: 'c95a619e-9c67-491c-99ac-e21dceb14444', title: 'PATENT_TITLE_4730' },
        { id: '04a33370-e45d-4eb7-a1a5-0dba4ac08960', title: 'PATENT_TITLE_4098' },
        { id: '4bb3a80d-1368-4832-8354-c7335744efbd', title: 'PATENT_TITLE_5020' },
        { id: '0f3cf105-ff8e-4202-abb5-2e963a7e027d', title: 'PATENT_TITLE_3671' },
        { id: '9cd01922-a009-411f-be06-c79f6585cf3c', title: 'PATENT_TITLE_2552' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App