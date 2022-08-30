import React, { useState } from "react";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const items = [
  {
    label: "Red",
    value: 1,
  },
  {
    label: "Blue",
    value: 2,
  },
];

export default function App() {
  const [selected, setSelected] = useState(items);
  return (
    <Screen>
      <AppPicker
        icon="menu"
        placeholder="Category"
        items={items}
        selectedItem={selected}
        onSelectedItem={setSelected}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
