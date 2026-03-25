import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge fontSize="14px" color={color} paddingX={1} borderRadius="3px">
      {score}
    </Badge>
  );
};

export default CriticScore;
