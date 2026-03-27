import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={"lg"}>
      <Skeleton height="300px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
