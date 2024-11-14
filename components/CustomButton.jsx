import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: "#FFA500",
          borderRadius: 12,
          minHeight: 62,
          justifyContent: "center",
          alignItems: "center",
          opacity: isLoading ? 0.5 : 1,
        },
        containerStyles,
      ]}
      disabled={isLoading}
    >
      <Text style={[{ color: "#fff", fontWeight: "600", fontSize: 18 }, textStyles]}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          style={{ marginLeft: 8 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
