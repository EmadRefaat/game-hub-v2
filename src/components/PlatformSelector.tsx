import { Box, Button, Menu, Portal, Spinner, Text } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, err, loading } = usePlatforms();

  if (err) return "";

  return (
    <Box marginBottom="2">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Platforms
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW="240px">
              <Menu.Item value="all-platforms">All Platforms</Menu.Item>
              {data.map((platform) => (
                <Menu.Item key={platform.id} value={platform.slug}>
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
