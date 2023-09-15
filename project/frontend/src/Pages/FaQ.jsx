import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>MASTER ආයතනයේ පංතියක් සදහා ඇතුලත් වීම හා ලියාපදිංචි වීම
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ඔබ කිසිදු ආකාරයකින් Master ආයතනයේ Online අධ්‍යාපන ඒකකය සඳහා ලියාපදිංචි නොවූ සිසුවෙක්නම්,

1. ඔබ දැනටමත් ආයතනයේ පන්ති පැමිණෙන, තවම Online අධ්‍යාපන ඒකකය හා ලියාපදිංචි නොවූ සිසුවෙක් නම් Institute Student Register හරහා ලියාපදිංචි වී සිටින්න.

2. ඔබ ආයතනයට පන්ති නොපැමිණි, නව සිසුවෙක් නම් New Student Register හරහා ලියාපදිංචි වී සිටින්න.

එවිට ඔබට හිමිවන අංක කින් යුත් Username එක හා ඔබ ලියාපදිංචි වීමේදී ලබාදුන් Password එක භාවිතා කර Online අධ්‍යාපන ඒකකය සඳහා ඇතුලත් වන්න.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>පංතියක් තෝරාගැනීම හා ලියාපදිංචි වීම</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ඔබට අවශ්‍ය පංතිය හා ඒ පිලිබද විස්තර Class අයිතමය මත Click කර ඔබට අවශය පංතිය පිලිබද විස්තර View Click කර බලා ඔබට අවශ්‍ය  ගුරුවරයා සමග  තෝරාගන්න.ඔබට නව පන්තියක් සඳහා ලියපදිංචි වීමට Join Now button හි Click කර අදාල පෝරමය පුරවා ඒ සදහා ලියාපදිංචි වන්න.

ඔබ ලියාපදිංචි වී ඇති පංති My Classes හි දැක්වේ

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>මුදල් ගෙවීම් කටයුතු</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          payment වෙත ගොස් අදාල ගුරුවරයා යටතේ පන්ති Select කර Cart එකට එක් කරගැනීමෙන් පසුව මුදල් ගෙවන්න.

# පන්ති ගාස්තු ගෙවිමට පෙර අදාළ පන්තිය, ඔබ ගෙවන මුදල හා මුදල් ගෙවන මාසය නිවැරදි බව තහවුරු කරගැනීමෙන් පසුව ගෙවීම් සිදුකරන්න.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}