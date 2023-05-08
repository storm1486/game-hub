import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width="300px">
        <Skeleton height='208px'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
      )
}

export default GameCardSkeleton