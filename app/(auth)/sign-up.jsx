import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    // Add your submission logic here
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-green-800 h-full">
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%', paddingHorizontal: 16, marginVertical: 4 }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[150px] rounded-full"
          />
          <Text style={{ fontSize: 24, color: 'white', marginTop: 20, fontFamily: 'regular' }}>
            Sign up
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={{ marginTop: 20 }}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 20 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 20 }}
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={{ width: '100%', marginTop: 28 }}
            isLoading={isSubmitting}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20, gap: 8 }}>
            <Text style={{ fontSize: 18, color: '#D1D5DB', fontFamily: 'p_regular' }}>
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              style={{ fontSize: 18, fontFamily: 'bold', color: '#FFA500' }}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
