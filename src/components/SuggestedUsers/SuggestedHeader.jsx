import { Avatar,  Button,  Flex,  Text } from "@chakra-ui/react"
import useAuthStore from "../../store/authStore"
import useLogout from '../../hooks/useLogout'
import { Link } from 'react-router-dom'


const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore((state) => state.user)
 
  if(!authUser) return null

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
          <Link to={`${authUser.username}`}>
            <Avatar size={'lg'} src={authUser.profilePicURL} />
            </Link>
            <Link to={`${authUser.username}`}>
            <Text fontSize={12} fontWeight={'bold'} >
                {authUser.username}
            </Text>
            </Link>
        </Flex>
        <Button 
        size={'xs'}
        background={'transparent'}
        _hover={{background:'tranparent'}}
        fontSize={14}
        color={'blue.400'}
        fontWeight={'medium'}
        cursor={'pointer'}
        isLoading={isLoggingOut}
        onClick={handleLogout}
        >
            Log out
        </Button>
    </Flex>
      
  )
}

export default SuggestedHeader

