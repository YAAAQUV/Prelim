import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[{ marginBottom: 8 }, otherStyles]}>
      <Text style={{ fontSize: 16, color: "#D1D5DB", fontFamily: 'p_medium' }}>{title}</Text>
      <View
        style={{
          width: '100%',
          height: 64,
          paddingHorizontal: 16,
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          borderWidth: 2,
          borderColor: "#D1D5DB",
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            color: "#000000",
            fontFamily: 'u_regular',
            fontSize: 16,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
