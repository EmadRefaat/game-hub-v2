import { Box, Button, Menu, MenuItem, Portal } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (sortorder: string) => void;
  selectedOrder: string;
}
const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder =
    sortOrders.find((sortOrder) => sortOrder.value === selectedOrder)?.label ||
    "Relevance";
  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Order by :{currentOrder}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW="240px">
              {sortOrders.map((order) => (
                <Menu.Item
                  key={order.value}
                  value={order.value}
                  onClick={() => onSelectSortOrder(order.value)}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
