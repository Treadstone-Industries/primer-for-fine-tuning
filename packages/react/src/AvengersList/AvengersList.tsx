import React, {useMemo} from 'react'
import Box from '../Box'

type Avenger = {
  id: string
  heroName: string
  powers: string[]
  realName: string
}

export type AvengersListProps = {
  count?: number
}

const data: Avenger[] = [
  {
    id: '1',
    heroName: 'Iron Man',
    powers: ['flight', 'durability', 'weapons', 'artificial intelligence'],
    realName: 'Tony Stark',
  },
  {
    id: '2',
    heroName: 'Captain America',
    powers: ['super strength', 'super speed', 'flight', 'leadership'],
    realName: 'Steve Rogers',
  },
]

function AvengersList({count}: AvengersListProps) {
  const avengers = useMemo(() => (count ? data.slice(0, count) : data), [count])

  return (
    <Box>
      {avengers.map(avenger => (
        <Box key={avenger.id}>
          {avenger.heroName} ({avenger.realName}) has the following powers: {avenger.powers.join(', ')}
        </Box>
      ))}
    </Box>
  )
}

AvengersList.displayName = 'AvengersList'

export default AvengersList
