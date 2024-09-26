import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '64c05142-149b-4340-80e3-75423761be85', title: 'PATENT_TITLE_4575' },
        { id: 'df108e36-5548-4946-bbdd-421d761d6942', title: 'PATENT_TITLE_4605' },
        { id: '905fad3a-3b28-4175-817d-cf3ec822ce5b', title: 'PATENT_TITLE_9772' },
        { id: '1c9b7f36-3e98-428a-8f5d-c6193f989be7', title: 'PATENT_TITLE_7057' },
        { id: 'bc9e08e3-750f-4810-b85d-b8e05a25e2cb', title: 'PATENT_TITLE_3676' },
        { id: '67eadaf0-ec9f-4815-aa68-df232e69ef65', title: 'PATENT_TITLE_8193' },
        { id: '9e171b85-3596-4abc-8401-827193193465', title: 'PATENT_TITLE_9544' },
        { id: '16890f76-54ab-4dda-98fc-bdda062cb69b', title: 'PATENT_TITLE_4655' },
        { id: 'dcd02021-4d69-4e48-b854-7fbc9ac8e713', title: 'PATENT_TITLE_4044' },
        { id: '332cdd02-6186-4f8c-8256-81ae9d322a83', title: 'PATENT_TITLE_4401' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App