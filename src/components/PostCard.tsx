import {
  useColorModeValue,
  Flex,
  Box,
  Stack,
  Heading,
  Badge,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import { IPost, ReactComponentType } from "../@types/global";

export const PostCard: ReactComponentType<{ post: IPost }> = ({ post }) => {
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.200");

  return (
    <Flex
      overflow="hidden"
      border="1px solid"
      borderColor={borderColor}
      rounded="md"
      boxShadow="sm"
      direction="column"
    >
      <Box
        backgroundImage={`url(${post.image})`}
        h="200px"
        bgSize="cover"
        bgPosition="center"
        borderBottom="1px solid"
        borderColor={borderColor}
      />
      <Box py="1" px="2">
        <Flex direction="column" my="2" align="center" justify="center">
          <Link href={`/articles/${post.slug}`}>
            <Heading
              textAlign="center"
              backgroundImage="linear-gradient(to right, #F024B9 19%, #A827CF 100%)"
              backgroundClip="text"
              cursor="pointer"
              fontSize="2xl"
              transition="0.5s ease"
              position="relative"
              mb="1"
              _after={{
                content: "''",
                position: "absolute",
                height: "2px",
                width: "100%",
                bottom: 0.8,
                left: 0,
                transform: "scalex(0)",
                transition: "0.2s ease",
              }}
              _hover={{
                ":after": {
                  background: "whiteAlpha.400",
                  transform: "scalex(1)",
                },
              }}
            >
              {post.title}
            </Heading>
          </Link>
          <Stack
            alignItems="center"
            isInline
            divider={
              <Text
                backgroundImage="linear-gradient(to right, #F024B9 19%, #A827CF 100%)"
                backgroundClip="text"
                mx="1"
              >
                •
              </Text>
            }
          >
            {post.tags &&
              post.tags.map((tag) => (
                <Badge key={tag} colorScheme="purple">
                  {tag}
                </Badge>
              ))}
          </Stack>
        </Flex>
        <Text>{post.summary}</Text>
      </Box>
    </Flex>
  );
};
