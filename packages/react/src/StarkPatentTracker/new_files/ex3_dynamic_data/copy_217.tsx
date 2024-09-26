import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b7c7e214-d16d-4bb9-9870-33e3c63eacba', title: 'PATENT_TITLE_5489' },
        { id: '99ff5f0d-f788-4e18-a1a4-0c054d1f378a', title: 'PATENT_TITLE_5150' },
        { id: 'e8f2f320-5dfc-4387-aeae-6bcece131658', title: 'PATENT_TITLE_9738' },
        { id: '6dadef46-43e8-4ee9-a338-e07109e41bf8', title: 'PATENT_TITLE_9616' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App