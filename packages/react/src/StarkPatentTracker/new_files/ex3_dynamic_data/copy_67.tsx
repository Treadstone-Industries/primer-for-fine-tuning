import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7bbe8f6b-4457-47fb-b9fd-24d68ec6592a', title: 'PATENT_TITLE_7814' },
        { id: '28352ddd-9c01-4767-b306-422b8ecf549a', title: 'PATENT_TITLE_1997' },
        { id: '9a90d975-f87b-4f06-8ed0-679666eb6525', title: 'PATENT_TITLE_8187' },
        { id: '0ebccbf8-2dfb-4b12-af63-0022712771ca', title: 'PATENT_TITLE_7269' },
        { id: 'e69cd67d-fb77-4d92-8d10-0f0978b9ef0b', title: 'PATENT_TITLE_5387' },
        { id: '0475a5a8-b4a1-4490-bfd3-13c8bda60788', title: 'PATENT_TITLE_2266' },
        { id: 'c06508b4-3fcb-45ac-b246-f8b27986d5ea', title: 'PATENT_TITLE_7820' },
        { id: '1f71c913-ba98-4671-b0f1-39295e5fa40a', title: 'PATENT_TITLE_6041' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App