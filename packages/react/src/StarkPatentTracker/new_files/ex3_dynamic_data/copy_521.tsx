import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9608454c-e7b3-4980-832f-582238dd91e3', title: 'PATENT_TITLE_6553' },
        { id: '25bc94a3-cdda-4a61-a96e-13d18f996066', title: 'PATENT_TITLE_4850' },
        { id: '47fe8e7c-10e8-4318-806d-076e3ea91da7', title: 'PATENT_TITLE_1260' },
        { id: 'dfd1faa5-a4a0-4b1f-899b-447118a23da1', title: 'PATENT_TITLE_6145' },
        { id: '257f6e7c-94ae-482b-bd04-9941b1d39f12', title: 'PATENT_TITLE_3044' },
        { id: 'a884d2c1-6425-4aae-98a9-8b198beb1a3f', title: 'PATENT_TITLE_7650' },
        { id: '7b88d8ff-a8cc-4ca2-b4ec-835aa72e5d34', title: 'PATENT_TITLE_4091' },
        { id: 'eb2a49cf-e225-4145-bde8-0a2d9c92abed', title: 'PATENT_TITLE_7437' },
        { id: '67042e08-5a33-47b2-be97-e51ff1d315ba', title: 'PATENT_TITLE_7547' },
        { id: '2b34eba5-9148-4b33-8099-cf1f1f140152', title: 'PATENT_TITLE_1295' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App