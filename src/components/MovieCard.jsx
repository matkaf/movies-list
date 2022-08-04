import { StarIcon } from '@chakra-ui/icons';
import { Badge, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

import TMDB_LOGO from '../assets/icons/tmdb.svg';

export default function MovieCard({ movie }) {
    const {
        title,
        vote_average,
        release_date,
        overview,
        poster_path,
    } = movie;
  return (
        <Grid
            h={250}
            w={220}
            alignItems='center'
            borderWidth='1px'
            borderRadius={'md'}
            position='relative'
            overflowY={'hidden'}
            bgColor={'blue.900'}
            color='white'
            box-shadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
        >
            <GridItem zIndex={0}>
                <Image
                    src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`}
                    boxSize='inherit'
                    filter='blur(1px)'
                    opacity={'0.3'}
                />
            </GridItem>

            <GridItem zIndex={1} position='absolute' p={4}>
                <Grid
                    display='inline-grid'
                    alignItems='center'
                    justifyContent='center'
                    templateColumns={'auto auto auto'}>
                    <Image src={TMDB_LOGO} alt='TMDB Logo' boxSize='1.5rem' />
                    <Text pl={2} fontWeight='500'>
                        {vote_average}
                    </Text>
                    <StarIcon boxSize={'0.8rem'} color='yellow.500' />
                </Grid>

                <GridItem>
                    <Heading size={'md'}>
                        {`${title} `}
                    </Heading>
                    <Badge colorScheme='teal'>
                        {release_date.slice(0, 4)}
                    </Badge>
                </GridItem>

                <GridItem>
                    <Text fontSize='sm' noOfLines={[1, 2, 3]}>
                        {overview}
                    </Text>
                </GridItem>
            </GridItem>
        </Grid>
  )
}
