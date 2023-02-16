import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from './TreeView.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { treeItemClasses } from '@mui/lab/TreeItem';
import { styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import Button from '@mui/material/Button';

// icons

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import HistoryIcon from '@mui/icons-material/History';
import Label from '@mui/icons-material/Label';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import WebIcon from '@mui/icons-material/Web';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';

const TreeViews = () => {

  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };

  // ANIMATED DIRECTORY STYLES

  const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.Mui-expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: 'inherit',
        color: 'inherit',
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(2),
      },
    },
  }));

  function StyledTreeItem(props) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      ...other
    } = props;
    return (
      <StyledTreeItemRoot
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        {...other}
      />
    );
  }

  return (
    <div className={styles.TreeView}>
      <PageHeader titles="Treeview" active="Treeview" items={['Apps']} />
      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Basic Treeview
              </div>
              <p className="mg-b-20 card-sub-title fs-12 text-muted">It is Very Easy to Customize and it uses in website apllication.</p>
              <Row>
                {/* <!-- col --> */}
                <Col lg={4}>
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>
                {/* <!-- /col --> */}

                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0">

                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<RemoveCircleOutlineIcon />}
                    defaultExpandIcon={<AddCircleOutlineIcon />}

                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>
                {/* <!-- /col --> */}

                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0 filetreeview">
                  <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<FolderOpenIcon />}
                    defaultExpandIcon={<FolderOpenIcon />}

                  >
                    <TreeItem nodeId="1" label="TECH">
                      <TreeItem nodeId="2" label="Company Maintenance" />
                      <TreeItem nodeId="3" label="Employees">
                        <TreeItem nodeId="4" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="5" label="Human Resources" />
                    </TreeItem>
                    <TreeItem nodeId="6" label="XRP">
                      <TreeItem nodeId="7" label="Company Maintenance" />
                      <TreeItem nodeId="8" label="Employees">
                        <TreeItem nodeId="9" label="Reports" />
                      </TreeItem>
                      <TreeItem nodeId="10" label="Human Resources" />
                    </TreeItem>
                  </TreeView>
                </Col>
                {/* <!-- /col --> */}
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col xl={8}>
              <Card>
                <Card.Body>
                  <div className="main-content-label mg-b-5">
                    Tree View Styles
                  </div>
                  <p className="mg-b-20 card-sub-title fs-12 text-muted">It is Very Easy to Customize and it uses in website apllication.</p>
                  <Row>
                    {/* <!-- col --> */}
                    <Col lg={4} className="collapsabletreeview1">
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger' />}
                        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary' />}
                      >
                        <TreeItem nodeId="1" label="Treeview1">
                          <TreeItem nodeId="2" label="Company Maintenance" />
                          <TreeItem nodeId="3" label="Employees">
                            <TreeItem nodeId="4" label="Reports">
                              <TreeItem nodeId="5" label="Report1" />
                              <TreeItem nodeId="6" label="Report2" />
                              <TreeItem nodeId="7" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="8" label="Employee Maint.">
                              <TreeItem nodeId="9" label="Reports">
                                <TreeItem nodeId="10" label="Report1" />
                                <TreeItem nodeId="11" label="Report2" />
                                <TreeItem nodeId="12" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="13" label="Employee Maint." />
                              <TreeItem nodeId="14" label="Reports">
                                <TreeItem nodeId="15" label="Report1" />
                                <TreeItem nodeId="16" label="Report2" />
                                <TreeItem nodeId="17" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="18" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="19" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="20" label="Treeview2">
                          <TreeItem nodeId="21" label="Company Maintenance" />
                          <TreeItem nodeId="22" label="Employees">
                            <TreeItem nodeId="23" label="Reports">
                              <TreeItem nodeId="24" label="Report1" />
                              <TreeItem nodeId="25" label="Report2" />
                              <TreeItem nodeId="26" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="27" label="Employee Maint.">
                              <TreeItem nodeId="28" label="Reports">
                                <TreeItem nodeId="29" label="Report1" />
                                <TreeItem nodeId="30" label="Report2" />
                                <TreeItem nodeId="31" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="32" label="Employee Maint." />
                              <TreeItem nodeId="33" label="Reports">
                                <TreeItem nodeId="34" label="Report1" />
                                <TreeItem nodeId="35" label="Report2" />
                                <TreeItem nodeId="36" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="37" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="38" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="39" label="Treeview3">
                          <TreeItem nodeId="40" label="Company Maintenance" />
                          <TreeItem nodeId="41" label="Employees">
                            <TreeItem nodeId="42" label="Reports">
                              <TreeItem nodeId="43" label="Report1" />
                              <TreeItem nodeId="44" label="Report2" />
                              <TreeItem nodeId="45" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="46" label="Employee Maint.">
                              <TreeItem nodeId="47" label="Reports">
                                <TreeItem nodeId="48" label="Report1" />
                                <TreeItem nodeId="49" label="Report2" />
                                <TreeItem nodeId="50" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="51" label="Employee Maint." />
                              <TreeItem nodeId="52" label="Reports">
                                <TreeItem nodeId="53" label="Report1" />
                                <TreeItem nodeId="54" label="Report2" />
                                <TreeItem nodeId="55" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="56" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="57" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="58" label="Treeview4">
                          <TreeItem nodeId="59" label="Company Maintenance" />
                          <TreeItem nodeId="60" label="Employees">
                            <TreeItem nodeId="61" label="Reports">
                              <TreeItem nodeId="62" label="Report1" />
                              <TreeItem nodeId="63" label="Report2" />
                              <TreeItem nodeId="64" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="65" label="Employee Maint.">
                              <TreeItem nodeId="66" label="Reports">
                                <TreeItem nodeId="67" label="Report1" />
                                <TreeItem nodeId="68" label="Report2" />
                                <TreeItem nodeId="69" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="70" label="Employee Maint." />
                              <TreeItem nodeId="71" label="Reports">
                                <TreeItem nodeId="72" label="Report1" />
                                <TreeItem nodeId="73" label="Report2" />
                                <TreeItem nodeId="74" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="75" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="76" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="77" label="Treeview5">
                          <TreeItem nodeId="78" label="Company Maintenance" />
                          <TreeItem nodeId="79" label="Employees">
                            <TreeItem nodeId="80" label="Reports">
                              <TreeItem nodeId="81" label="Report1" />
                              <TreeItem nodeId="82" label="Report2" />
                              <TreeItem nodeId="83" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="84" label="Employee Maint.">
                              <TreeItem nodeId="85" label="Reports">
                                <TreeItem nodeId="86" label="Report1" />
                                <TreeItem nodeId="87" label="Report2" />
                                <TreeItem nodeId="88" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="89" label="Employee Maint." />
                              <TreeItem nodeId="90" label="Reports">
                                <TreeItem nodeId="91" label="Report1" />
                                <TreeItem nodeId="92" label="Report2" />
                                <TreeItem nodeId="93" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="94" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="95" label="Human Resources" />
                        </TreeItem>
                        <TreeItem nodeId="96" label="Treeview6">
                          <TreeItem nodeId="97" label="Company Maintenance" />
                          <TreeItem nodeId="98" label="Employees">
                            <TreeItem nodeId="99" label="Reports">
                              <TreeItem nodeId="100" label="Report1" />
                              <TreeItem nodeId="101" label="Report2" />
                              <TreeItem nodeId="102" label="Report3" />
                            </TreeItem>
                            <TreeItem nodeId="103" label="Employee Maint.">
                              <TreeItem nodeId="104" label="Reports">
                                <TreeItem nodeId="105" label="Report1" />
                                <TreeItem nodeId="106" label="Report2" />
                                <TreeItem nodeId="107" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="108" label="Employee Maint." />
                              <TreeItem nodeId="109" label="Reports">
                                <TreeItem nodeId="110" label="Report1" />
                                <TreeItem nodeId="111" label="Report2" />
                                <TreeItem nodeId="112" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="113" label="Employee Maint." />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="114" label="Human Resources" />
                        </TreeItem>
                      </TreeView>
                    </Col>
                    {/* <!-- /col --> */}

                    {/* <!-- col --> */}
                    <Col lg={4} className="mt-4 mt-lg-0 collapsabletreeview1">
                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<RemoveCircleOutlineIcon className='text-danger' />}
                        defaultExpandIcon={<AddCircleOutlineIcon className='text-primary' />}
                      >
                        <TreeItem nodeId="1" label="Treeview1">
                          <TreeItem nodeId="2" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="3" label="Employees" className='text-pink'>
                            <TreeItem nodeId="4" label="Reports">
                              <TreeItem nodeId="5" label="Report1" className='text-success' />
                              <TreeItem nodeId="6" label="Report2" className='text-success' />
                              <TreeItem nodeId="7" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="8" label="Employee Maint.">
                              <TreeItem nodeId="9" label="Reports">
                                <TreeItem nodeId="10" label="Report1" className='text-success' />
                                <TreeItem nodeId="11" label="Report2" className='text-success' />
                                <TreeItem nodeId="12" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="13" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="14" label="Reports">
                                <TreeItem nodeId="15" label="Report1" className='text-success' />
                                <TreeItem nodeId="16" label="Report2" className='text-success' />
                                <TreeItem nodeId="17" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="18" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="19" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="20" label="Treeview1">
                          <TreeItem nodeId="21" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="22" label="Employees" className='text-pink'>
                            <TreeItem nodeId="23" label="Reports">
                              <TreeItem nodeId="24" label="Report1" className='text-success' />
                              <TreeItem nodeId="25" label="Report2" className='text-success' />
                              <TreeItem nodeId="26" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="27" label="Employee Maint.">
                              <TreeItem nodeId="28" label="Reports">
                                <TreeItem nodeId="29" label="Report1" className='text-success' />
                                <TreeItem nodeId="30" label="Report2" className='text-success' />
                                <TreeItem nodeId="31" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="32" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="33" label="Reports">
                                <TreeItem nodeId="34" label="Report1" className='text-success' />
                                <TreeItem nodeId="35" label="Report2" className='text-success' />
                                <TreeItem nodeId="36" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="37" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="38" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="39" label="Treeview1">
                          <TreeItem nodeId="40" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="41" label="Employees" className='text-pink'>
                            <TreeItem nodeId="42" label="Reports">
                              <TreeItem nodeId="43" label="Report1" className='text-success' />
                              <TreeItem nodeId="44" label="Report2" className='text-success' />
                              <TreeItem nodeId="45" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="46" label="Employee Maint.">
                              <TreeItem nodeId="47" label="Reports">
                                <TreeItem nodeId="48" label="Report1" className='text-success' />
                                <TreeItem nodeId="49" label="Report2" className='text-success' />
                                <TreeItem nodeId="50" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="51" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="52" label="Reports">
                                <TreeItem nodeId="53" label="Report1" className='text-success' />
                                <TreeItem nodeId="54" label="Report2" className='text-success' />
                                <TreeItem nodeId="55" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="56" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="57" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="58" label="Treeview1">
                          <TreeItem nodeId="59" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="60" label="Employees" className='text-pink'>
                            <TreeItem nodeId="61" label="Reports">
                              <TreeItem nodeId="62" label="Report1" className='text-success' />
                              <TreeItem nodeId="63" label="Report2" className='text-success' />
                              <TreeItem nodeId="64" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="65" label="Employee Maint.">
                              <TreeItem nodeId="66" label="Reports">
                                <TreeItem nodeId="67" label="Report1" className='text-success' />
                                <TreeItem nodeId="68" label="Report2" className='text-success' />
                                <TreeItem nodeId="69" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="70" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="71" label="Reports">
                                <TreeItem nodeId="72" label="Report1" className='text-success' />
                                <TreeItem nodeId="73" label="Report2" className='text-success' />
                                <TreeItem nodeId="74" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="75" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="76" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="77" label="Treeview1">
                          <TreeItem nodeId="78" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="79" label="Employees" className='text-pink'>
                            <TreeItem nodeId="80" label="Reports">
                              <TreeItem nodeId="81" label="Report1" className='text-success' />
                              <TreeItem nodeId="82" label="Report2" className='text-success' />
                              <TreeItem nodeId="83" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="84" label="Employee Maint.">
                              <TreeItem nodeId="85" label="Reports">
                                <TreeItem nodeId="86" label="Report1" className='text-success' />
                                <TreeItem nodeId="87" label="Report2" className='text-success' />
                                <TreeItem nodeId="88" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="89" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="90" label="Reports">
                                <TreeItem nodeId="91" label="Report1" className='text-success' />
                                <TreeItem nodeId="92" label="Report2" className='text-success' />
                                <TreeItem nodeId="93" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="94" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="95" label="Human Resources" className='text-warning' />
                        </TreeItem>
                        <TreeItem nodeId="96" label="Treeview1">
                          <TreeItem nodeId="97" label="Company Maintenance" className='text-warning' />
                          <TreeItem nodeId="98" label="Employees" className='text-pink'>
                            <TreeItem nodeId="99" label="Reports">
                              <TreeItem nodeId="100" label="Report1" className='text-success' />
                              <TreeItem nodeId="101" label="Report2" className='text-success' />
                              <TreeItem nodeId="102" label="Report3" className='text-success' />
                            </TreeItem>
                            <TreeItem nodeId="103" label="Employee Maint.">
                              <TreeItem nodeId="104" label="Reports">
                                <TreeItem nodeId="105" label="Report1" className='text-success' />
                                <TreeItem nodeId="106" label="Report2" className='text-success' />
                                <TreeItem nodeId="107" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="108" label="Employee Maint." className='text-warning' />
                              <TreeItem nodeId="109" label="Reports">
                                <TreeItem nodeId="110" label="Report1" className='text-success' />
                                <TreeItem nodeId="111" label="Report2" className='text-success' />
                                <TreeItem nodeId="112" label="Report3" className='text-success' />
                              </TreeItem>
                              <TreeItem nodeId="113" label="Employee Maint." className='text-warning' />
                            </TreeItem>
                          </TreeItem>
                          <TreeItem nodeId="114" label="Human Resources" className='text-warning' />
                        </TreeItem>
                      </TreeView>
                    </Col>
                    {/* <!-- /col --> */}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4}>
              <Card>
                <Card.Body>
                  <Row>
                    <div className="main-content-label mg-b-5">
                      Collapsable Treeview
                    </div>
                    {/* <!-- col --> */}
                    <Col lg={12} className="mt-2 mt-lg-0 collapsabletreeview">
                      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                        <Box className='btn-group' sx={{ mb: 1 }}>
                          <Button className='btn' onClick={handleExpandClick}>
                            {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
                          </Button>
                          <Button className='btn' onClick={handleSelectClick}>
                            {selected.length === 0 ? 'Select all' : 'Unselect all'}
                          </Button>
                        </Box>
                        <TreeView
                          aria-label="controlled"
                          defaultCollapseIcon={<ExpandMoreIcon />}
                          defaultExpandIcon={<ChevronRightIcon />}
                          expanded={expanded}
                          selected={selected}
                          onNodeToggle={handleToggle}
                          onNodeSelect={handleSelect}
                          multiSelect
                        >
                          <TreeItem nodeId="1" label="Treeview1">
                            <TreeItem nodeId="2" label="Company Maintenance" />
                            <TreeItem nodeId="3" label="Employees">
                              <TreeItem nodeId="4" label="Reports">
                                <TreeItem nodeId="5" label="Report1" />
                                <TreeItem nodeId="6" label="Report2" />
                                <TreeItem nodeId="7" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="8" label="Employee Maint.">
                                <TreeItem nodeId="9" label="Reports">
                                  <TreeItem nodeId="10" label="Report1" />
                                  <TreeItem nodeId="11" label="Report2" />
                                  <TreeItem nodeId="12" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="13" label="Employee Maint." />
                                <TreeItem nodeId="14" label="Reports">
                                  <TreeItem nodeId="15" label="Report1" />
                                  <TreeItem nodeId="16" label="Report2" />
                                  <TreeItem nodeId="17" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="18" label="Employee Maint." />
                              </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="19" label="Human Resources" />
                          </TreeItem>
                          <TreeItem nodeId="20" label="Treeview2">
                            <TreeItem nodeId="21" label="Company Maintenance" />
                            <TreeItem nodeId="22" label="Employees">
                              <TreeItem nodeId="23" label="Reports">
                                <TreeItem nodeId="24" label="Report1" />
                                <TreeItem nodeId="25" label="Report2" />
                                <TreeItem nodeId="26" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="27" label="Employee Maint.">
                                <TreeItem nodeId="28" label="Reports">
                                  <TreeItem nodeId="29" label="Report1" />
                                  <TreeItem nodeId="30" label="Report2" />
                                  <TreeItem nodeId="31" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="32" label="Employee Maint." />
                                <TreeItem nodeId="33" label="Reports">
                                  <TreeItem nodeId="34" label="Report1" />
                                  <TreeItem nodeId="35" label="Report2" />
                                  <TreeItem nodeId="36" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="37" label="Employee Maint." />
                              </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="38" label="Human Resources" />
                          </TreeItem>
                          <TreeItem nodeId="39" label="Treeview3">
                            <TreeItem nodeId="40" label="Company Maintenance" />
                            <TreeItem nodeId="41" label="Employees">
                              <TreeItem nodeId="42" label="Reports">
                                <TreeItem nodeId="43" label="Report1" />
                                <TreeItem nodeId="44" label="Report2" />
                                <TreeItem nodeId="45" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="46" label="Employee Maint.">
                                <TreeItem nodeId="47" label="Reports">
                                  <TreeItem nodeId="48" label="Report1" />
                                  <TreeItem nodeId="49" label="Report2" />
                                  <TreeItem nodeId="50" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="51" label="Employee Maint." />
                                <TreeItem nodeId="52" label="Reports">
                                  <TreeItem nodeId="53" label="Report1" />
                                  <TreeItem nodeId="54" label="Report2" />
                                  <TreeItem nodeId="55" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="56" label="Employee Maint." />
                              </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="57" label="Human Resources" />
                          </TreeItem>
                          <TreeItem nodeId="58" label="Treeview4">
                            <TreeItem nodeId="59" label="Company Maintenance" />
                            <TreeItem nodeId="60" label="Employees">
                              <TreeItem nodeId="61" label="Reports">
                                <TreeItem nodeId="62" label="Report1" />
                                <TreeItem nodeId="63" label="Report2" />
                                <TreeItem nodeId="64" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="65" label="Employee Maint.">
                                <TreeItem nodeId="66" label="Reports">
                                  <TreeItem nodeId="67" label="Report1" />
                                  <TreeItem nodeId="68" label="Report2" />
                                  <TreeItem nodeId="69" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="70" label="Employee Maint." />
                                <TreeItem nodeId="71" label="Reports">
                                  <TreeItem nodeId="72" label="Report1" />
                                  <TreeItem nodeId="73" label="Report2" />
                                  <TreeItem nodeId="74" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="75" label="Employee Maint." />
                              </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="76" label="Human Resources" />
                          </TreeItem>
                          <TreeItem nodeId="77" label="Treeview5">
                            <TreeItem nodeId="78" label="Company Maintenance" />
                            <TreeItem nodeId="79" label="Employees">
                              <TreeItem nodeId="80" label="Reports">
                                <TreeItem nodeId="81" label="Report1" />
                                <TreeItem nodeId="82" label="Report2" />
                                <TreeItem nodeId="83" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="84" label="Employee Maint.">
                                <TreeItem nodeId="85" label="Reports">
                                  <TreeItem nodeId="86" label="Report1" />
                                  <TreeItem nodeId="87" label="Report2" />
                                  <TreeItem nodeId="88" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="89" label="Employee Maint." />
                                <TreeItem nodeId="90" label="Reports">
                                  <TreeItem nodeId="91" label="Report1" />
                                  <TreeItem nodeId="92" label="Report2" />
                                  <TreeItem nodeId="93" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="94" label="Employee Maint." />
                              </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="95" label="Human Resources" />
                          </TreeItem>
                          <TreeItem nodeId="96" label="Treeview6">
                            <TreeItem nodeId="97" label="Company Maintenance" />
                            <TreeItem nodeId="98" label="Employees">
                              <TreeItem nodeId="99" label="Reports">
                                <TreeItem nodeId="100" label="Report1" />
                                <TreeItem nodeId="101" label="Report2" />
                                <TreeItem nodeId="102" label="Report3" />
                              </TreeItem>
                              <TreeItem nodeId="103" label="Employee Maint.">
                                <TreeItem nodeId="104" label="Reports">
                                  <TreeItem nodeId="105" label="Report1" />
                                  <TreeItem nodeId="106" label="Report2" />
                                  <TreeItem nodeId="107" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="108" label="Employee Maint." />
                                <TreeItem nodeId="109" label="Reports">
                                  <TreeItem nodeId="110" label="Report1" />
                                  <TreeItem nodeId="111" label="Report2" />
                                  <TreeItem nodeId="112" label="Report3" />
                                </TreeItem>
                                <TreeItem nodeId="113" label="Employee Maint." />
                              </TreeItem>
                            </TreeItem>
                            <TreeItem nodeId="114" label="Human Resources" />
                          </TreeItem>
                        </TreeView>
                      </Box>
                    </Col>
                    {/* <!-- /col --> */}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Animated Directory Styles
              </div>
              <p className="mg-b-20 card-sub-title fs-12 text-muted">It is Very Easy to Customize and it uses in website apllication.</p>
              <Row>
                {/* <!-- col --> */}
                <Col lg={4} className="mt-4 mt-lg-0 ">
                  <div className="dTree">
                    <TreeView defaultCollapseIcon={<ArrowDropDownIcon />} defaultExpandIcon={<ArrowRightIcon />} defaultEndIcon={<div style={{ width: 24 }} />} >
                      <StyledTreeItem nodeId="1" labelText="Site" labelIcon={WebIcon} />
                      <StyledTreeItem nodeId="2" labelText="About the Web Site" labelIcon={InfoIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      <StyledTreeItem nodeId="3" labelText="Contact Us" labelIcon={ContactSupportIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      <StyledTreeItem nodeId="4" labelText="Cars" labelIcon={DirectionsCarIcon}>
                        <StyledTreeItem nodeId="5" labelText="Add New Brand" labelIcon={AddBoxIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="6" labelText="List All Brand" labelIcon={ListIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="7" labelText="Mercedes - Benz" labelIcon={DirectionsCarIcon}>
                          <StyledTreeItem nodeId="8" labelText="About the Mercedes - Benz" labelIcon={InfoIcon} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="9" labelText="History" labelIcon={HistoryIcon} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="10" labelText="Series" labelIcon={BrowseGalleryIcon}>
                            <StyledTreeItem nodeId="11" labelText="A Series" labelIcon={DirectionsCarIcon}>
                              <StyledTreeItem nodeId="12" labelText="A 140" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              <StyledTreeItem nodeId="13" labelText="A 150" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              <StyledTreeItem nodeId="14" labelText="A 180 CDI" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              <StyledTreeItem nodeId="15" labelText="A 200 CDI" labelIcon={DirectionsCarIcon} />
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="16" labelText="B Series" labelIcon={DirectionsCarIcon}>
                              <StyledTreeItem nodeId="17" labelText="B 140" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              <StyledTreeItem nodeId="18" labelText="B 150" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              <StyledTreeItem nodeId="19" labelText="B 180 CDI" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              <StyledTreeItem nodeId="20" labelText="B Special Series" labelIcon={DirectionsCarIcon}>
                                <StyledTreeItem nodeId="21" labelText="B Extreme" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                                <StyledTreeItem nodeId="22" labelText="B Jumper" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                                <StyledTreeItem nodeId="23" labelText="B Raiden" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                                <StyledTreeItem nodeId="24" labelText="B Subzero" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                              </StyledTreeItem>
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="25" labelText="Concept Cars" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                            <StyledTreeItem nodeId="26" labelText="Best Prototypes" labelIcon={FormatAlignCenterIcon} color="#1a73e8" bgColor="#e8f0fe" />
                            <StyledTreeItem nodeId="27" labelText="List all other categories" labelIcon={ListIcon} />
                          </StyledTreeItem>
                          <StyledTreeItem nodeId="28" labelText="Custom Series" labelIcon={DashboardCustomizeIcon} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="29" labelText="A+ Series for children" labelIcon={PersonIcon} />
                          <StyledTreeItem nodeId="30" labelText="B+ Series for women" labelIcon={PersonIcon} />
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="31" labelText="Chevrolet" labelIcon={DirectionsCarIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="32" labelText="Saab Custom models" labelIcon={DashboardCustomizeIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="33" labelText="Fiat" labelIcon={Label}>
                          <StyledTreeItem nodeId="34" labelText="Kartal SLX" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="35" labelText="Dogan 1.6 Turbo" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="36" labelText="Sahin" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="37" labelText="Dogan Gorunumlu Sahin" labelIcon={Label}>
                            <StyledTreeItem nodeId="38" labelText="1.3 Motor" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                            <StyledTreeItem nodeId="39" labelText="1.6 Motor" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                            <StyledTreeItem nodeId="40" labelText="1.8 Motor" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                            <StyledTreeItem nodeId="41" labelText="2.0 Motor" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                          </StyledTreeItem>
                          <StyledTreeItem nodeId="42" labelText="Serce" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="43" labelText="Murat 131" labelIcon={Label} color="#1a73e8" bgColor="#e8f0fe" />
                        </StyledTreeItem>
                      </StyledTreeItem>
                      <StyledTreeItem nodeId="44" labelText="Electronic Models" labelIcon={ElectricMeterIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      <StyledTreeItem nodeId="45" labelText="Real Estate" labelIcon={CorporateFareIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      <StyledTreeItem nodeId="46" labelText="Bruce Lee" labelIcon={SportsMmaIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      <StyledTreeItem nodeId="47" labelText="Graphics" labelIcon={AutoGraphIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      <StyledTreeItem nodeId="48" labelText="Smart Phones" labelIcon={SmartphoneIcon}>
                        <StyledTreeItem nodeId="49" labelText="Apple" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="50" labelText="Samsung" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="51" labelText="LG" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="52" labelText="Sony" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="53" labelText="HTC" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="54" labelText="MI" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="55" labelText="Oppo" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        <StyledTreeItem nodeId="56" labelText="Other Models" labelIcon={SmartphoneIcon}>
                          <StyledTreeItem nodeId="57" labelText="First other model" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                          <StyledTreeItem nodeId="58" labelText="Second other model" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="59" labelText="Add New Model" labelIcon={SmartphoneIcon} color="#1a73e8" bgColor="#e8f0fe" />
                      </StyledTreeItem>
                    </TreeView>
                  </div>
                </Col>
                {/* <!-- /col --> */}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW CLOSED --> */}
    </div>
  )
};

export default TreeViews;
