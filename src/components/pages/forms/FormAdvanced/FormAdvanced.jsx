import React, { useState } from 'react';
import styles from './FormAdvanced.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';
import { Col, Form, Row, Card, Button, InputGroup } from 'react-bootstrap';
import { BasicfileUpload, DropzoneDisabled, DualList, SelectBox, SelectBoxwithLabel, CountrySelector, SketchExample, SpecificFile } from '../../../../Data/Pages/Forms/FormAdvanceData/DataFormAdvanced';
import { MutipleSelect, DisabledMutipleSelect, SingleGroup, MultipleGroup, GroupFilterOption, GroupMultipleOption, CustomisedSelector, MultipleCoustomSelector, MultipleMonthPicker } from '../../../../Data/Pages/Forms/FormAdvanceData/DataMultipleSelectStyle';
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import { Compact } from '@uiw/react-color';
import 'react-phone-input-2/lib/style.css'
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { ChromePicker } from "react-color";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import 'filepond/dist/filepond.min.css';


//mui plugins
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//file pond dependency plugins
registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
);

const FormAdvanced = () => {
  const [filespond, setfilespond] = useState([]);

  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
  });

  const options = [
    { value: 'Choose one', label: 'Choose one', isDisabled: "true" },
    { value: 'Chuck Testa', label: 'Chuck Testa' },
    { value: 'Sage Cattabriga-Alosa', label: 'Sage Cattabriga-Alosa' },
    { value: 'Nikola Tesla', label: 'Nikola Tesla' },
    { value: 'Cattabriga-Alosa', label: 'Cattabriga-Alosa' },
    { value: 'Nikola Alosa', label: 'Nikola Alosa' },

  ];

  const CitiesData = [
    { value: 'Arizona', label: 'Arizona', isDisabled: "true" },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'Montana', label: 'Montana' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Wyoming', label: 'Wyoming' },
  ];

  const TimeZone = [
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
  const groupedOptions = [
    {
      label: 'Cities',
      options: CitiesData,
    },
    {
      label: 'Central-TimeZone',
      options: TimeZone,
    },
  ];

  const Data = [
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

  const animatedComponents = makeAnimated();

  const option = [
    { value: 'Firefox', label: 'Firefox' },
    { value: 'Chrome', label: 'Chrome' },
    { value: 'Safari', label: 'Safari' },
    { value: 'Opera', label: 'Opera' },
    { value: 'Internet Explorer', label: 'Internet Explorer' },
  ]

  const [color, setColor] = useState('#6c5ffc')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleChangeComplete = (color) => {
    console.log(color)
  };

  const [hex, setHex] = useState("#fff");

  //Time picker

  const [value, setValue] = React.useState(dayjs('2000-01-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  //Dynamic time picker
  const [timevalue, settimevalue] = React.useState(dayjs('2022-12-07'));

  //Basic Date picker
  const [Datevalue, setDatevalue] = React.useState(null);

  //Month picker
  const [monthvalue, setmonthvalue] = React.useState(dayjs('2022-12-07'));

  //Year picker
  const [yearvalue, setyearvalue] = React.useState(dayjs('2022-12-07'));

  //Date, Month , Year picker
  const [multivalue, setmultivalue] = React.useState(dayjs('2022-12-07'));


  return (
    <div className={styles.FormAdvanced}>
      <PageHeader titles="Form Advanced" active="Form Advanced" items={['Forms']} />
      {/* <!-- Row --> */}
      <Row>
        <Col xl={12} md={12}>
          <Form method="post" className="card">
            <Card.Header>
              <Card.Title as='h3'>File Upload</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="mb-7">
                <Col lg={4} sm={12} className="mb-4 mb-lg-0">
                  <UploadButton uploader={uploader}
                    options={{ multi: true }}
                    onComplete={files => console.log(files)}>
                    {({ onClick }) =>
                      <Form.Control className='file_input text-center' onClick={onClick} placeholder='click here and upload attachment' />
                    }
                  </UploadButton>
                </Col>
                <Col lg={4} sm={12} className="mb-4 mb-lg-0">
                  <DropzoneDisabled />
                </Col>
                <Col lg={4} sm={12}>
                  <div className="App">
                    <BasicfileUpload />
                  </div>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label className="form-label mt-0">Single File input Upload</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Multiple files input Upload</Form.Label>
                <Form.Control type="file" id="formFileMultiple" multiple />
              </Form.Group>
              <Form.Group className="mb-0 mt-3">
                <Form.Label className="form-label mt-0">Specific File Upload</Form.Label>
                <SpecificFile />
              </Form.Group>
              <Form.Group className="mb-0 mt-3">
                <Form.Label className="form-label mt-0">Dropzone with Animated</Form.Label>
                <FilePond className='mt-3 mb-5'
                  allowMultiple={true}
                  maxFiles={10}
                  server="/api"
                  files={filespond}
                  onupdatefiles={setfilespond}
                  allowReorder={true}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </Form.Group>
            </Card.Body>
          </Form>
        </Col>
        <Col xl={12} md={12}>
          <Form method="post" className="card">
            <Card.Header>
              <Card.Title as='h3'>Select2 elements</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Basic</Form.Label>
                <Select
                  options={options}
                  placeholder='choose one'
                  classNamePrefix='Select'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Basic Select2</Form.Label>

                <Select
                  options={groupedOptions}
                  classNamePrefix='Select'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Select2 with search box</Form.Label>
                <Select
                  className="basic-single"
                  classNamePrefix="Select"
                  defaultValue={Data[0]}
                  name="color"
                  options={Data}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Users list</Form.Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={2}
                  isMulti
                  options={option}
                  classNamePrefix="Select"
                />
              </Form.Group>
            </Card.Body>
          </Form>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Time Picker</Card.Title>
            </Card.Header>
            <Card.Body>

              <div className="wd-150 mg-b-30">
                <InputGroup>
                  <TextField
                    id="time"
                    label="Basic clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                  />
                </InputGroup>
              </div>
              {/* <!-- wd-150 --> */}
              <Form.Label className="mt-5">Set the scroll position to local time if no defaultValue selected:</Form.Label>
              <div className="wd-150 mg-b-30">
                <InputGroup>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Time"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </InputGroup>
              </div>
              {/* <!-- wd-150 --> */}
              <Form.Label className="mt-4 mb-4">Dynamically set the time using a Javascript Date object:</Form.Label>
              <div className="d-flex">
                <InputGroup className="wd-150">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      ampm={false}
                      openTo="hours"
                      views={['hours', 'minutes', 'seconds']}
                      inputFormat="HH:mm:ss"
                      mask="__:__:__"
                      label="clock with second"
                      value={timevalue}
                      onChange={(newValue) => {
                        settimevalue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </InputGroup>
                {/* <!-- input-group --> */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Color Picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <p className=" mb-1">Same way you select color in Adobe Photoshop.</p>
                <Button className='btn-pill' size='sm' onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close Color Picker' : 'Pick a Color'}</Button>
                {showColorPicker && (<ChromePicker className='mt-3' disableAlpha={true} color={color} onChange={updatedColor => setColor(updatedColor.hex)} onChangeComplete={handleChangeComplete} />
                )}
              </div>
              <SketchExample />
              <div>
                <p className="mt-4 mb-1">Show pallete only. If you'd like, spectrum can show the palettes you specify, and nothing else.</p>
                <Compact
                  color={hex}
                  onChange={(color) => {
                    setHex(color.hex);
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Date, Month, Year Range Picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <InputGroup>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Basic date picker"
                        value={Datevalue}
                        onChange={(newValue) => {
                          setDatevalue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </InputGroup>
                </Col>
                <Col md={4} className="mt-4 mt-md-0">
                  <InputGroup>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        openTo="month"
                        views={['month']}
                        label="Month picker"
                        minDate={dayjs('2012-03-01')}
                        maxDate={dayjs('2023-06-01')}
                        value={monthvalue}
                        onChange={(newValue) => {
                          setmonthvalue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                    </LocalizationProvider>
                  </InputGroup>
                </Col>
                <Col md={4} className="mt-4 mt-md-0">
                  <InputGroup>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        openTo="year"
                        views={['year']}
                        label="Year only"
                        value={yearvalue}
                        onChange={(newValue) => {
                          setyearvalue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                    </LocalizationProvider>
                  </InputGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Date picker</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 mg-sm-b-40">The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's defaultValue.</p>
              <div className="wd-200 mg-b-30">
                <InputGroup>
                <MultipleMonthPicker/>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Months </Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mg-b-20 mg-sm-b-40">The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's defaultValue.</p>
              <div className="wd-200 mg-b-30">
                <InputGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="year"
                    views={['year', 'month', 'day']}
                    label="Year, month and date"
                    value={multivalue}
                    onChange={(newValue) => {
                      setmultivalue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                  </LocalizationProvider>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Select Styles</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>Basic MutipleSelect</Form.Label>

                    <MutipleSelect />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Disabled MutipleSelect</Form.Label>
                    <DisabledMutipleSelect />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Single Group Disabled MutipleSelect</Form.Label>
                    <SingleGroup />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Multiple Items With Group-Option</Form.Label>
                    <MultipleGroup />
                  </Form.Group>

                </Col>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>MutipleSelect</Form.Label>
                    <GroupFilterOption />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Group-Option MutipleSelect</Form.Label>
                    <GroupMultipleOption />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Custom style1</Form.Label>
                    <CustomisedSelector />
                  </Form.Group>
                  <Form.Group className="mb-0">
                    <Form.Label>Custom style2</Form.Label>
                    <MultipleCoustomSelector />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Dual List Box</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Card className="shadow-none border">
                    <Card.Body>
                      <DualList />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Select Box</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group className="mb-5 mb-lg-0">
                    <SelectBox />
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <SelectBoxwithLabel />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row--> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Country selector</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form className='CountrySelector'>
                <CountrySelector />
                <Button className="btn btn-primary py-1 px-4 mb-1">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /Row --> */}

    </div>

  )
};

export default FormAdvanced;
