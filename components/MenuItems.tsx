import { Text } from "@chakra-ui/react";

const MenuItems: React.FC = (props) => {
  return (
    <Text marginTop={{ base: 4, md: 0 }} mr={6} display="block">
      {props.children}
    </Text>
  );
};

export default MenuItems;
