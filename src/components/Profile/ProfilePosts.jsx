import useGetUserPosts from "../../hooks/useGetUserPosts"
import ProfilePost from "./ProfilePost"
import {Box, Grid, Skeleton, VStack, Flex, Text} from '@chakra-ui/react'


const ProfilePosts = () => {

  const {isLoading, posts}  = useGetUserPosts()

  const noPostsFound = !isLoading && posts.lengt === 0
  if(noPostsFound) return <NoPostsFound />
    
  return (
    <Grid
    templateColumns={{
        sm:'repeat(1,1fr)',
        md:'repeat(3,2fr)'
    }}
    gap={1}
    columnGap={1}
    >
    {isLoading && [0,1,2].map((_,idx) =>(
      <VStack key={idx} alignItems={'flex-start'} gap={4}>
        <Skeleton w={'full'}>
          <Box h='300px'>contents wrapped</Box>
        </Skeleton>
      </VStack>
    ))}
     {!isLoading &&(
      <>
        {posts.map((post)=>(
          <ProfilePost post={post} key={post.id} />
        ))}
      </>
     )}
    </Grid>
  )
}

export default ProfilePosts

const NoPostsFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
			<Text fontSize={"2xl"}>No Posts Found🤔</Text>
		</Flex>
	)
}
