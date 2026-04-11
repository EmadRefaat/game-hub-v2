import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, err, loading } = usePlatforms();

  if (err) return null;

  return (
    <Box marginBottom="2">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW="240px">
              {data.map((platform) => (
                <Menu.Item
                  key={platform.id}
                  value={platform.slug}
                  onClick={() => onSelectPlatform(platform)}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;
