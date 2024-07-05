import { Box } from '@mui/material';
import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { mockGeographyData as data } from '../data/mockData';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { geoFeatures } from '../data/mockGeoFeatures';

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height="100%" border='1px solid white'>
      <ResponsiveChoropleth
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
     
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.5, 0.7] : [0.5, 0.5]}
        projectionRotation={[-360, 0, 0]}
        borderWidth={1.45}
        borderColor=""
        legends={
          isDashboard
            ? [
                {
                  anchor: 'bottom-left',
                  direction: 'column',
                  justify: true,
                  translateX: 20,
                  translateY: -10,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: 'left-to-right',
                  itemTextColor: '#444444',
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000000',
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    </Box>
  );
};

export default GeographyChart;
