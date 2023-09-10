import React from "react";
import { Box } from "@chakra-ui/react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useTheme } from "@chakra-ui/react";

export default function Autocomplete({ countries }) {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const theme = useTheme();

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <Box px={8} py={4}>
      <CUIAutoComplete
        placeholder="Type a Country"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        tagStyleProps={{
          rounded: "full",
          pt: theme.space[1],
          pb: theme.space[2],
          px: theme.space[2],
          fontSize: theme.fontSizes.md,
        }}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </Box>
  );
}
