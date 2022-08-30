import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 5,
    title: "T5",
    description: "D5",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 6,
    title: "T6",
    description: "D6",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 7,
    title: "T7",
    description: "D7",
    image: require("../assets/amr.jpg"),
  },
  {
    id: 8,
    title: "T8",
    description: "D8",
    image: require("../assets/amr.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 7,
              title: "T7",
              description: "D7",
              image: require("../assets/amr.jpg"),
            },
            {
              id: 8,
              title: "T8",
              description: "D8",
              image: require("../assets/amr.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
