import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg2 from "../../assets/bg2.png";
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
 
} from "react-icons/bs";



const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;



const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;



const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.$isOpen ? "250px" : "60px")}; /* Collapsed width */
  height: 100%;
  background-color: #2c3e50; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 60px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
`;

const SidebarHeader = styled.div`
  padding: ${(props) => (props.$isOpen ? "20px" : "10px")};
  font-size: ${(props) => (props.$isOpen ? "24px" : "18px")};
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: ${(props) => (props.$isOpen ? "18px" : "0px")}; /* Hide text when collapsed */
  border-bottom: 1px solid #34495e; /* Darker border */
  transition: font-size 0.3s ease, padding 0.3s ease;
  &:hover {
    background-color: #34495e; /* Darker background on hover */
  }
`;

const SidebarIcon = styled.div`
  margin-right: ${(props) => (props.$isOpen ? "10px" : "0px")};
  transition: margin-right 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: -1px;
  width: 30px;
  height: 30px;
  background-color: #34495e; /* Darker background */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101; /* Ensure toggle stays above the sidebar */
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContainer $isOpen={isSidebarOpen}>
      <SidebarHeader $isOpen={isSidebarOpen}>
        {isSidebarOpen ? <Logo src={bg2} alt="Logo" /> : "☰"}
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/dashboard">Dashboard</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/class">Class</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/student">Students</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsPerson />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/teacher">Teachers</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/assignment">Assignments</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsBook/>
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/exam">Exams</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsGraphDown  />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/performance">Performance</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsCalendar  />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/attendance">Attendance</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsBook  />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/library">Library</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsChatDots   />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/announcement">Announcement</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsCalendarEvent  />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/events">Events & Calendar</StyledLink>}
        </SidebarNavItem>
        <SidebarNavItem $isOpen={isSidebarOpen}>
          <SidebarIcon>
            <BsGear  />
          </SidebarIcon>
          {isSidebarOpen && <StyledLink to="/admin/settings">Settings & Profile</StyledLink>}
        </SidebarNavItem>
      </SidebarNav>
      <ToggleButton onClick={toggleSidebar}>
        <ToggleIcon $isOpen={isSidebarOpen}>▲</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  ); 
};

export default Sidebar;
