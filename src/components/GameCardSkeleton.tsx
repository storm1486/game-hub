import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width= "250px" borderRadius={10} overflow="hidden">
        <Skeleton height='208px'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
      )
}

export default GameCardSkeleton