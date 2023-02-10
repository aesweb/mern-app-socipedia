import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: '0.75rem', margin: '0,75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main}>Mediform Saglik Kabini</Typography>
        <Typography color={medium}>mediformsaglik.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Misyonumuz Darıca ve yakın bölgelerde yaşayan halkımızın sağlık
        hizmetine ulaşımını kolaylaştırmak ve kaliteli hizmet almalarını
        sağlamaktır. Bu gaye doğrultusunda Darıca'nın Osman Gazi mahallesinde
        hizmet vermeye başlamış bulunmaktayız.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
