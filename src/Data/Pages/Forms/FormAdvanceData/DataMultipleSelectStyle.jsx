import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import Select from "react-select";
import Calendar  from "react-multi-date-picker";

//Multiple Month

export function MultipleMonthPicker () {
  return (
<div>
<Calendar
  placeholder='Pick a Month and date'
  numberOfMonths={2}
  disableMonthPicker
  disableYearPicker
/>
</div>

  )
}

// Multiple Select Styles START

// Basic MutipleSelect

export const MutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },

  ];
  return (

    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={options}

    />
  )
};


// Disabled MutipleSelect

export const DisabledMutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },

  ];
  return (

    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={options}
      disabled={true}
    />
  )
};


//   Single Group Disabled MutipleSelect


const Group1 = [
  {
    value: "Option 1", label: "Option 1",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 2",
    label: "Option 2",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 3",
    label: "Option 3",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 4",
    label: "Option 4",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 5",
    label: "Option 5",
    isDisabled: "isDisabled"
  }
];
const Group2 = [
  { value: "Option 11", label: "Option 11" },
  {
    value: "Option 12",
    label: "Option 12"
  },
  {
    value: "Option 13",
    label: "Option 13"
  },
  {
    value: "Option 14",
    label: "Option 14"
  },
  {
    value: "Option 15",
    label: "Option 15"
  },
  {
    value: "Option 16",
    label: "Option 16"
  },
  {
    value: "Option 17",
    label: "Option 17"
  },
  {
    value: "Option 18",
    label: "Option 18"
  }
];

const Group3 = [
  { value: "Option 31", label: "Option 31" },
  {
    value: "Option 32",
    label: "Option 32"
  },
  {
    value: "Option 33",
    label: "Option 33"
  },
  {
    value: "Option 34",
    label: "Option 34"
  },
  {
    value: "Option 35",
    label: "Option 35"
  },
  {
    value: "Option 36",
    label: "Option 36"
  },
  {
    value: "Option 37",
    label: "Option 37"
  },
  {
    value: "Option 38",
    label: "Option 38"
  },
  {
    value: "Option 39",
    label: "Option 39"
  }
];
const groupeddata = [
  {
    label: "Group 1",
    options: Group1
  },
  {
    label: "Group 2",
    options: Group2,
  },
  {
    label: "Group 3",
    options: Group3,
  },
];

export function SingleGroup() {
  const [selected, setSelected] = useState([]);


  return (
    <div>
      <Creatable
        classNamePrefix="Select2"
        options={groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

// Multiple items with Group Option

const Group4 = [
  { value: "1", label: "1" },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  }
];
const Group5 = [
  { value: "11", label: "11" },
  {
    value: "12",
    label: "12"
  },
  {
    value: "13",
    label: "13"
  },
  {
    value: "14",
    label: "14"
  },
  {
    value: "15",
    label: "15"
  },
  {
    value: "16",
    label: "16"
  },
  {
    value: "17",
    label: "17"
  },
  {
    value: "18",
    label: "18"
  }
];

const Group6 = [
  { value: "31", label: "31" },
  {
    value: "32",
    label: "32"
  },
  {
    value: "33",
    label: "33"
  },
  {
    value: "34",
    label: "34"
  },
  {
    value: "35",
    label: "35"
  },
  {
    value: "36",
    label: "36"
  },
  {
    value: "37",
    label: "37"
  },
  {
    value: "38",
    label: "38"
  },
  {
    value: "39",
    label: "39"
  }
];
const Groupeddata = [
  {
    label: "Group 1",
    options: Group4
  },
  {
    label: "Group 2",
    options: Group5,
  },
  {
    label: "Group 3",
    options: Group6,
  },
];

export function MultipleGroup() {
  const [selected, setSelected] = useState([]);


  return (
    <div>
      <Creatable
        isMulti
        classNamePrefix="Select2"
        options={Groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

// Group-Option Filter

export const GroupFilterOption = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary", disabled: true },
    { value: "March", label: "March", disabled: true },
    { value: "April", label: "April", disabled: true },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },

  ];
  return (

    <MultiSelect
      value={selected} className="multi-select"
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={options}
    />
  )
};

// Group-Option MutipleSelect

const Group7 = [

  {
    value: "Apple",
    label: "Apple"
  },
  {
    value: "Mangoo",
    label: "Mangoo"
  },
  {
    value: "Banana",
    label: "Banana"
  },
  {
    value: "Jackfruit",
    label: "Jackfruit"
  }
];
const Group8 = [
  {
    value: "BMW",
    label: "BMW"
  },
  {
    value: "Mercedes-benz",
    label: "Mercedes-benz"
  },
  {
    value: "Jaguar",
    label: "Jaguar"
  },
  {
    value: "Renault",
    label: "Renault"
  },
  {
    value: "Audi",
    label: "Audi"
  },
  {
    value: "Tesla",
    label: "Tesla"
  },
  {
    value: "Porsche",
    label: "Porsche"
  }
];

const Groupeddata1 = [
  {
    label: "Fruits",
    options: Group7
  },
  {
    label: "Luxury Cars",
    options: Group8,
  }
];

export function GroupMultipleOption() {
  const [selected, setSelected] = useState([]);


  return (
    <div>
      <Creatable
        isMulti
        classNamePrefix="Select2"
        options={Groupeddata1}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};

// Single Custom Style

export class CustomisedSelector extends React.Component {

  options = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May", color: "#6c5ffc" },
    { value: "June", label: "June" },
    { value: "July", label: "July", color: "#05c3fb" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October", color: "#498205" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  };

  render() {
    return (
      <Select classNamePrefix='Select2' options={this.options} styles={this.styles} />
    );
  }
}

// Multiple coustom Style

export class MultipleCoustomSelector extends React.Component {
  options = [
    {
      label: "Fruits",
      options: [
        {
          value: "01",
          label: "Apple",
        },
        {
          value: "02",
          label: "Mangoo",
          color: '#f7b731'
        },
        {
          value: "03",
          label: "Banana"
        },
        {
          value: "04",
          label: "Jackfruit",
          color: '#849e52'
        }
      ]
    },
    {
      label: "Cars",
      options: [
        {
          value: "001",
          label: "BMW"
        },
        {
          value: "002",
          label: "Mercedes-benz"
        },
        {
          value: "003",
          label: "Jaguar"
        },
        {
          value: "004",
          label: "Renault"
        },
        {
          value: "005",
          label: "Audi"
        },
        {
          value: "006",
          label: "Tesla",
          color: '#9fcfc1'
        },
        {
          value: "007",
          label: "Porsche"
        }
      ]
    }
  ];

  styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  };
  render() {
    return (
      <div>
        <Select classNamePrefix="Select2" isMulti onChange={(e) => console.log(e)} options={this.options} styles={this.styles} />
      </div>
    );
  }
}

// Multiple Select Styles END