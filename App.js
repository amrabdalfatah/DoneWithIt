import React, { useState } from "react";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen style={{ justifyContent: "center", alignItem: "center" }}>
      <AppTextInput
        icon="email"
        placeholder="Enter First Name"
        onChangeText={(text) => console.log(text)}
      />
    </Screen>
  );
}
