import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
AdminDashboardContainer,
Content,
TopContent,
Section,
SectionTitle,
CardContainer,
Card,
CardTitle,
CardContent,
} from "../../styles/DashboardStyles.jsx";

const AdminDashboard = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const [totalStudents, setTotalStudents] = useState(0);
const [totalTeachers, setTotalTeachers] = useState(0);
const [totalClasses, setTotalClasses] = useState(0);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/dashboard-data");
      const result = await response.json();
      setTotalStudents(result.students);
      setTotalTeachers(result.teachers);
      setTotalClasses(result.classes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

return (
  <AdminDashboardContainer>
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <Content $isSidebarOpen={isSidebarOpen}>
      <TopContent>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>{totalStudents}</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>{totalTeachers}</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>{totalClasses}</CardContent>
            </Card>
          </CardContainer>
        </Section>
      </TopContent>
    </Content>
  </AdminDashboardContainer>
);
};

export default AdminDashboard;