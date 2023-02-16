import React, { useState, Component } from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import Dropzone from "react-dropzone";
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import {Compact} from '@uiw/react-color';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { ChromePicker, SketchPicker } from "react-color";
import { Button } from 'react-bootstrap';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import 'react-drop-zone/dist/styles.css'

import {useDropzone} from 'react-dropzone';

// File Upload 1

export function FileUpload() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

  return (
    <div className="App">
      <Dropzone onDrop={handleDrop} >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p className='mt-5'>Drag and Drop a file here or Click</p>
          </div>
        )}
      </Dropzone>
      <div className="dropzone-main">
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// File Upload 2

export class FileuploadCustomised extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    this.setState({
      files: files
    });
  }
  render() {
    return (
      <DropzoneArea
        acceptedFiles={['image/*']}
        onChange={this.handleChange.bind(this)}
        showFileNames
        dropzoneText="Drag and Drop a file here or Click"
        showAlerts={true}
        filesLimit={20}

      />
    );
  }
}

// File Upload 3


export function DisabledFileDropZone() {
  const setFileNames = useState;
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));
  return (

    <div className="App">
      <Dropzone onDrop={handleDrop} disabled>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p className='disable-dropzone'>Drag and Drop a file here or Click</p>
          </div>
        )}
      </Dropzone>
    </div>
  )
}

// Multiple Filedropzone

export class CustomFileuploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    this.setState({
      files: files
    });
  }
  render() {
    return (
      <DropzoneArea
        acceptedFiles={['image/*']}
        onChange={this.handleChange.bind(this)}
        showFileNames
        showAlerts={true}
        filesLimit={100}
        dropzoneText="Drag and Drop a file here or Click"
      />
    );
  }
}


// Select2 elements START

// Basic

const options = [
  { value: 'Choose one', label: 'Choose one', isDisabled: "true" },
  { value: 'Chuck Testa', label: 'Chuck Testa' },
  { value: 'Sage Cattabriga-Alosa', label: 'Sage Cattabriga-Alosa' },
  { value: 'Nikola Tesla', label: 'Nikola Tesla' },
  { value: 'Cattabriga-Alosa', label: 'Cattabriga-Alosa' },
  { value: 'Nikola Alosa', label: 'Nikola Alosa' },

];

export class BasicSelect extends Component {

  render() {
    return (
      <Select
        options={options}
        placeholder='choose one'
        classNamePrefix='Select'
      />
    );
  }
}

// Basic Select2

export const CitiesData = [
  { value: 'Arizona', label: 'Arizona', isDisabled: "true" },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Montana', label: 'Montana' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Wyoming', label: 'Wyoming' },
];

export const TimeZone = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Wisconsin', label: 'Wisconsin' },
];

export const groupedOptions = [
  {
    label: 'Cities',
    options: CitiesData,
  },
  {
    label: 'Central-TimeZone',
    options: TimeZone,
  },
];

export class BasicSelectCustom extends Component {

  render() {
    return (
      <Select
        options={groupedOptions}
        classNamePrefix='Select'
      />
    );
  }
}

// Basic Select3

export const Data = [
  { value: 'Arizona', label: 'Arizona', isDisabled: "false" },
  { value: 'Colorado', label: 'Colorado' },
  { value: 'Idaho', label: 'Idaho' },
  { value: 'Montana', label: 'Montana' },
  { value: 'New Mexico', label: 'New Mexico' },
  { value: 'North Dakota', label: 'North Dakota' },
  { value: 'Utah', label: 'Utah' },
  { value: 'Wyoming', label: 'Wyoming' },
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Arkansas', label: 'Arkansas' },
  { value: 'Illinois', label: 'Illinois' },
  { value: 'Iowa', label: 'Iowa' },
  { value: 'Kansas', label: 'Kansas' },
  { value: 'Kentucky', label: 'Kentucky' },
  { value: 'Louisiana', label: 'Louisiana' },
  { value: 'Minnesota', label: 'Minnesota' },
  { value: 'Mississippi', label: 'Mississippi' },
  { value: 'Missouri', label: 'Missouri' },
  { value: 'Oklahoma', label: 'Oklahoma' },
  { value: 'South Dakota', label: 'South Dakota' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Wisconsin', label: 'Wisconsin' },
];

export class BasicSelectSearch extends Component {

  render() {
    return (
      <Select
        className="basic-single"
        classNamePrefix="Select"
        defaultValue={Data[0]}
        name="color"
        options={Data}
      />
    );
  }
}

// User List

const animatedComponents = makeAnimated();

export function Userslist() {
  const option = [
    { value: 'Firefox', label: 'Firefox' },
    { value: 'Chrome', label: 'Chrome' },
    { value: 'Safari', label: 'Safari' },
    { value: 'Opera', label: 'Opera' },
    { value: 'Internet Explorer', label: 'Internet Explorer' },
  ]

  return (
    <div>
      <div>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={2}
          isMulti
          options={option}
          classNamePrefix="Select"
        />
      </div>
    </div>
  );
}

// Select2 elements END

// Time Picker START  

// Default Time Picker

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 40
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 150,
    },
  }),
);

export function TimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        label='Default Time Picker'
        id="time"
        type="time"
        defaultValue="00:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
    </form>
  );
}



// Basic Time picker2
// Set the scroll position 

export function BasicTimePicker() {

  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label='Set the scroll position'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

// Dynamically Time picker

export function DynamicTimePicker() {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          label='Dynamic Time Picker'
          ampm={false}
          openTo="hours"
          views={['hours', 'minutes']}
          inputFormat="HH:mm"
          mask="__:__"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />

      </Stack>
    </LocalizationProvider>
  );
}

// Time Picker END

// Color Picker START

// Basic

export function BasicStyle() {
  const [color, setColor] = useState('#6c5ffc')
  const [showColorPicker, setShowColorPicker] = useState(false)


  const handleChangeComplete = (color) => {
    console.log(color)
  };

  return (

    <div>
      <p className=" mb-1">Same way you select color in Adobe Photoshop.</p>
      <Button className='btn-pill' size='sm' onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close Color Picker' : 'Pick a Color'}</Button>
      {showColorPicker && (<ChromePicker className='mt-3' disableAlpha={true} color={color} onChange={updatedColor => setColor(updatedColor.hex)} onChangeComplete={handleChangeComplete} />
      )}
    </div>
  )
};

// SketchExample style

export class SketchExample extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };
  render() {

    return (
      <div>
        <p className="mt-4 mb-1">Show Adove photoshop with Alphaline and pallete. </p>
        <Button className='btn-pill' variant='primary' size='sm' onClick={this.handleClick}>
          <ColorLensIcon />
        </Button>
        {this.state.displayColorPicker ? <div >
          <div onClick={this.handleClose} />
          <SketchPicker className='mt-3' color={this.state.color} onChange={this.handleChange} />
        </div> : null}

      </div>

    )
  }
}
// Palettes Style

export function PalettesStyle() {
  const [hex, setHex] = useState("#fff");
  return (
    <div>
      <p className="mt-4 mb-1">Show pallete only. If you'd like, spectrum can show the palettes you specify, and nothing else.</p>
      <Compact
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
}

// Color Picker END

// Styled Color Picker START


// Styled Color Picker END

// Date, Month, Year Range Picker START

// Date

export function BasicDatePicker() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date Range"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

// Month


export function MonthPicker() {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['month']}
        label="Month Range"
        minDate={new Date('2012-03-01')}
        maxDate={new Date('2023-06-01')}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}


export function YearPicker() {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['year']}
        label="Year Range"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}

// Date, Month, Year Range Picker END

// Default Date picker

export function DefaultDatePicker() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date Range"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}


const optionss = [
  {
    label: 'Java Script',
    options: [
      { value: 'Jquery', label: 'Jquery' },
      { value: 'Angular JS', label: 'Angular JS' },
      { value: 'React JS', label: 'React JS' },
      { value: 'Vue JS', label: 'Vue JS' }
    ],
  },
  {
    label: 'Popular',
    options: [
      { value: 'Java Script', label: 'Java Script' },
      { value: 'Java', label: 'Java' },
      { value: 'Python', label: 'Python' },
      { value: 'TypeScript', label: 'TypeScript' },
      { value: 'PHP', label: 'PHP' },
      { value: 'Ruby on Rails', label: 'Ruby on Rails' },
    ],
  }
];

export class DualList extends Component {
  state = {
    selected: [options[0]],
  };

  onChange = (selected) => {
    console.log(selected);
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <DualListBox
        options={optionss}
        selected={selected}
        allowDuplicates
        simpleValue={false}
        onChange={this.onChange}
      />
    );
  }
}

// Dual List Box END

// Select Box START

// Box 1

export function SelectBox() {
  let [value, setValue] = useState([""]);
  function handleChange(selected) {
    setValue(selected);
    console.log(selected);
  }
  const options = [

    { value: "HTML5", label: "HTML5" },
    { value: "CSS 3", label: "CSS 3" },
    { value: "PHP", label: "PHP" },
    { value: "J-Query", label: "J-Query" },
    { value: ".Net", label: ".Net" },
    { value: "Java", label: "Java" },
    { value: "Android", label: "Android" },
    { value: "React JS", label: "React JS" },
    { value: "Angular JS", label: "Angular JS" },
    { value: "PhotoShop", label: "PhotoShop" },
    { value: "Python", label: "Python" },
    { value: "Sql", label: "Sql" },
    { value: "JavaScript", label: "JavaScript" }
  ];


  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        // return containsWord(option.label, filterInput);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
}

// Box 2

export function SelectBoxwithLabel() {
  let [value, setValue] = useState([""]);
  function handleChange(selected) {
    setValue(selected);
    console.log(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "Web designer", label: "Web designer" },
        {
          value: "Web Developer",
          label: "Web Developer"
        },
        {
          value: "Application Developer",
          label: "Application Developer"
        },
        {
          value: "App Designer",
          label: "App Designer"
        }
      ]
    },
    {
      label: "Voice Side",
      options: [
        { value: "Tell Caller", label: "Tell Caller" },
        {
          value: "Recruiter",
          label: "Recruiter"
        },
        {
          value: "HR",
          label: "HR"
        },
        {
          value: "Data Entry",
          label: "Data Entry"
        },
        {
          value: "Mapping",
          label: "Mapping"
        },
        {
          value: "US Recruiter",
          label: "US Recruiter"
        }
      ]
    }
  ];

  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        // return containsWord(option.label, filterInput);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
}

// Select Box END

// Country selectorinterface StyledProps 

export const CountrySelector = () => {
  return (
    <div>
      <PhoneInput
        country={"us"}
        value="1425652"
        onChange={phone => console.log({ phone })}
      />
    </div>
  );
};


//Disabled Dropzone

export function DropzoneDisabled (props) {
  const { getRootProps, getInputProps} = useDropzone({
    disabled: true
  });

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone file_upload disabled'})}>
        <input {...getInputProps()} />
        <p><del>Drag 'n' drop some files here, or click to select files</del></p>
      </div>
    </section>
  );
}


// Basic file upload

export function BasicfileUpload (props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container file_upload">
      <div {...getRootProps({className: 'dropzone file_upload'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className='dropzone-main'>
        <h4 className='mb-0'>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

//Specific file upload

export function SpecificFile (props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="">
      <div {...getRootProps({ className: 'dropzone specificFile' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}
