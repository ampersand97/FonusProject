import { Stack, useRouter } from "expo-router"; 
import { useEffect } from "react"; 

export default function Layout() { 
  const router = useRouter(); 

  useEffect(() => { 
    
    if (router) { 
      router.replace("/WelcomeScreen"); 
    }
  }, [router]); 

  return (
    <Stack screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="WelcomeScreen/index" /> 
      <Stack.Screen name="WelcomeScreen2/index" />
      <Stack.Screen name="CreateAccountScreen/index" />
      {/* <Stack.Screen name="NewUserScreen/index" />
      <Stack.Screen name="RescuePasswordSetEmail/index"/>
      <Stack.Screen name="PasswordRescueScreen/index"/> */}
    </Stack>
  );
}