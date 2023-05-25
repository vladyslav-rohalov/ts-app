import Typography from '@mui/material/Typography';

type PropsTitle = {
  title: string;
};

export default function SectionTitle({ title }: PropsTitle) {
  return (
    <Typography
      variant="h2"
      align="center"
      fontSize={'3.5em'}
      lineHeight={'1.23em'}
      fontFamily={'Clash Display'}
      fontWeight={600}
      zIndex={2}
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(105,234,203,1) 0%, rgba(234,204,248,1) 48%, rgba(102,84,241,1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0 auto 32px',
      }}
    >
      {title}
    </Typography>
  );
}
