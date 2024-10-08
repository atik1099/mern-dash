import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';

import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard } from 'components';
// import {agentCount} from './agent';


const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 4
      }
    }
  })

  const latestProperties = data?.data ?? [];

  const allPropertiesCount = latestProperties.length;

  const propertiesForSell = latestProperties.filter((property) => property.type === 'forSell').length;
  const propertiesForRent = latestProperties.filter((property) => property.type === 'forRent').length;


  if (isLoading) return <Typography>Loading...</Typography>
  if (isError) return <Typography>Something went wrong!</Typography>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Total Enlisted Properties"
          value={allPropertiesCount}
          series={[allPropertiesCount, latestProperties.length - allPropertiesCount]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart
          title="Properties for Sell"
          value={propertiesForSell}
          series={[propertiesForSell, propertiesForRent]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart
          title="Properties for Rent"
          value={propertiesForRent}
          series={[propertiesForRent, propertiesForSell]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart
          title="Total Agents"
          value={4}
          // this needs to be dynamic
          series={[3, 1]} // replace with dynamic values
          colors={['#275be8', '#c4e8ef']}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">Latest Properties</Typography>

        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home