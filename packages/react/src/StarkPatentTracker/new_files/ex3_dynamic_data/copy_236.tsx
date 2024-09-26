import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '88abf092-5e70-489a-850a-83109954e67f', title: 'PATENT_TITLE_2784' },
        { id: 'ffe739af-3997-41a3-8ad0-ff1e2cd2b8b9', title: 'PATENT_TITLE_7632' },
        { id: 'cba0b111-7e01-437b-9da0-db6127804371', title: 'PATENT_TITLE_5495' },
        { id: '6f2208a8-149d-4150-be4b-8ae95f640f3f', title: 'PATENT_TITLE_6233' },
        { id: 'a4327ae4-a54c-4281-8351-7ae72f2e6304', title: 'PATENT_TITLE_2419' },
        { id: '01cdff51-6426-4377-828b-4cee1346b53f', title: 'PATENT_TITLE_8591' },
        { id: 'a549af1b-cbb4-4c1c-90ae-fdcf1f25f8fa', title: 'PATENT_TITLE_4759' },
        { id: 'bdd3919c-58f0-4042-b6bd-12ce66ec2545', title: 'PATENT_TITLE_5138' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App