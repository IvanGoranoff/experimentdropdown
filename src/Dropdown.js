import React, {useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 20;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const grad = [
  'Gotse Delchev',
  'Blagoevgrad',
  'Bansko',
  'Razlog',
  'Sofia',
  'Varna',
  'Burgas',
];
const oblast = [
    'Blagoevgrad',
    'Sofia',
    'Varna',
    'Burgas',
  ];
  const obshtina = [
    'Gotse Delchev',
    'Blagoevgrad',
    'Bansko',
    'Razlog',
    'Sofia',
    'Varna',
    'Burgas',
  ];
const Dropdown = () => {
    const [town, setTown] = React.useState([]);
    const [aria, setAria] = React.useState([]);
    const [region, setRegion] = React.useState([]);

    const [totalReactPackages, setTotalReactPackages] = React.useState(null);


    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setTown(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
//    const multiSelectHandler = (option) => {
//         const details = option.selectedItems;
//        const stringData =  details.map(({value}) => `${value}`).join(',');
//        console.log(stringData);
//       };
    const handleChangeAria = (event) => {
        const {
          target: { value },
        } = event;
        setAria(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
      const handleChangeRegion = (event) => {
        const {
          target: { value },
        } = event;
        setRegion(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      useEffect(() => {
        // GET request using fetch inside useEffect React hook
        let url = "https://ivanelud/filters";
        let  oblts ;
        let  grd ;
        let  obshtna ;


        aria.length > 0 ?  oblts= `&oblast=${aria}` : oblts = ""; 
        town.length > 0 ?  grd= `&grad=${town}` : grd = ""; 
        region.length > 0 ?  obshtna= `&obshtina=${region}` : obshtna = ""; 

    

    url = url + oblts + obshtna +grd
         
    console.log(url)

        fetch(url)
            .then(response => response.json());
            setTotalReactPackages([{town},{aria},{region}]);


    }, [aria]);
    console.log(totalReactPackages)
  return (
     <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Town</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={town}
          onChange={handleChange}
          input={<OutlinedInput label="Town" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {grad.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={town.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label2">Region</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label2"
          id="demo-multiple-checkbox2"
          multiple
          value={aria}
          onChange={handleChangeAria}
          input={<OutlinedInput label="Region" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {oblast.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={aria.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label3">Аrea</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label3"
          id="demo-multiple-checkbox3"
          multiple
          value={region}
          onChange={handleChangeRegion}
          input={<OutlinedInput label="Аrea" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {obshtina.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={region.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Dropdown