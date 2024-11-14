import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter(); // Initialize router
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    // Add your validation or authentication logic here

    // Simulate a successful login and navigate to the home screen
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/home'); // Navigate to the home screen
    }, 1000);
  };

  return (
    <SafeAreaView className="bg-green-800 h-full">
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%', paddingHorizontal: 16, marginVertical: 24 }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[150px] rounded-full"
          />
          <Text style={{ fontSize: 24, color: 'white', marginTop: 40, fontFamily: 'regular' }}>
            Log in 
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 28 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 28 }}
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={{ width: '100%', marginTop: 28 }}
            isLoading={isSubmitting}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20, gap: 8 }}>
            <Text style={{ fontSize: 18, color: '#D1D5DB', fontFamily: 'regular' }}>
              Don't have an account?
            </Text>
            <Link href="/sign-up" style={{ fontSize: 18, fontFamily: 'bold', color: '#FFA500' }}>
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
