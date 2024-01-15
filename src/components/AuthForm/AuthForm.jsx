import { Box,Text, VStack,Image,  Flex } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import GoogleAuth from "./GoogleAuth"

const AuthForm = () => {
    const [isLogin,setIsLogin] = useState(true)
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={3}>
        <VStack spacing={2}>
            <Image src='/logo.png' h={16} cursor={'pointer'} alt='Instagram' />
            {isLogin ? <Login /> : <Signup /> }
            {/* --------or------- text */}
            <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                <Box flex={1} h={"1px"} bg={'gray.400'} />
                <Text mx={1} color={'white'}>OR</Text>
                <Box flex={1} h={"1px"} bg={'gray.400'} />
            </Flex>
            <GoogleAuth prefix={isLogin ? 'Log in':'sign up'} />
        </VStack>
      </Box>
      {/* --switch between Login and SignUP */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Box mx={2} fontSize={14}>
                {isLogin? "Don't have an account?":"Already have an account?"}
            </Box>
            <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={'pointer'}>
                {isLogin?"Sign up":"Log in"}
            </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm

