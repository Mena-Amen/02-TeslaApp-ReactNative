import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default [
  {
    name: "Controls",
    iconName: "car",
    href: "/controls",
  },
  {
    name: "Climate",
    iconName: "fan",
    href: "/climate",
  },
  {
    name: "Speed",
    icon: () => <Ionicons name="speedometer-sharp" size={26} color="gray" />,
    href: "/doctor",
  },
  {
    name: "Location",
    iconName: "map-marker",
    href: "/location",
  },
  {
    name: "Summon",
    iconName: "ship-wheel",
    href: "/summon",
  },
  {
    name: "Security",
    iconName: "shield-check",
    href: "/security",
  },
  {
    name: "Updates",
    iconName: "update",
    href: "/updates",
  },
  {
    name: "Pet mode",
    iconName: "dog",
    href: "/pet-mode",
  },
];
