import { Box, Flex,Text } from "@chakra-ui/react"
import {BsGrid3X3, BsBookmark, BsSuitHeart} from 'react-icons/bs'


const ProfileTabs = () => {
  return (
    <Flex
    w={'full'}
    justifyContent={'center'}
    gap={{base:4,sm:10}}
    textTransform={'uppercase'}
    fontWeight={'bold'}
    >
      <Flex borderTop={'1px solid white'} alignItems={'center'} p='3' cursor={'pointer'}>
        <Box fontSize={20}>
            <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}} p={1}> Posts</Text>
      </Flex>

      <Flex alignItems={'center'} p='3' cursor={'pointer'}>
        <Box fontSize={20}>
            <BsBookmark />
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}} p={1}> Saved</Text>
      </Flex>
      
      <Flex  alignItems={'center'} p='3' cursor={'pointer'}>
        <Box fontSize={20}>
            <BsSuitHeart fontWeight={'bold'}/>
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}} p={1}> Likes</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs
