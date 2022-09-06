import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigation from "./FeedNavigation";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigation from "./AccountNavigation";
import NewListingButton from "./NewListingButton";

const Tap = createBottomTabNavigator();

const AppNavigation = () => (
  <Tap.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tap.Screen
      name="Feed"
      component={FeedNavigation}
      options={{
        tabBarLabel: "Listing",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tap.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarLabel: "Post",
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
      })}
    />
    <Tap.Screen
      name="AccountNavigation"
      component={AccountNavigation}
      options={{
        tabBarLabel: "Account",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tap.Navigator>
);

export default AppNavigation;
