import { PlusSquareIcon } from '@chakra-ui/icons'
import { Flex, GridItem, Heading } from '@chakra-ui/react'

export default function Header() {
  return (
    <GridItem
        area={'header'}
        px="4"
        bg={'blue.900'}
        display='flex'
        alignItems={'center'}
        // justifyContent={'center'}
    >
        <Flex align={'center'}>
            <PlusSquareIcon boxSize={'1.25em'} color='whiteAlpha.400' />
            <Heading color={'whiteAlpha.900'} pl='2'>
                MoviesList
            </Heading>

        </Flex>
    </GridItem>
  )
}
