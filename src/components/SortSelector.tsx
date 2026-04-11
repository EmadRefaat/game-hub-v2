import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";

const SortSelector = () => {
  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Order by :relevance
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW="240px">
              <Menu.Item>Relevance</Menu.Item>
              <Menu.Item>Date added</Menu.Item>
              <Menu.Item>Name</Menu.Item>
              <Menu.Item>Release Date</Menu.Item>
              <Menu.Item>Popularity</Menu.Item>
              <Menu.Item>Average rating</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
