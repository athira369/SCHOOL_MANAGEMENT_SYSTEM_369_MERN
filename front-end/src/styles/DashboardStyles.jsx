import styled from "styled-components";

export const Content = styled.div`
  margin-left: ${(props) => (props.$isSidebarOpen ? "250px" : "60px")};
  transition: margin-left 0.3s ease;
  padding: 20px;
   flex: 1;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align children to the left */
  justify-content: flex-start; /* Align children to the top */
`;

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: flex-start; /* Align children to the left */
  justify-content: flex-start; /* Align children to the top */
  width: 100%;
  height: 100%;
  padding: 0; /* Ensure no extra spacing */
  margin: 0; /* Remove any extra spacing */
 
`;

export const TopContent = styled.div`
  display: flex;
  gap: 20px;
  flex: 1; /* Take remaining space */
 width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
 
`;

export const BottomContent = styled.div`
  margin-top: 20px;
  display: flex; /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
  justify-content: flex-start; /* Align child components to the left */
  align-items: flex-start; /* Align items to the top *
  
  flex-wrap: wrap;
`;

export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1; /* Make the sections expand to fill the available space */
  margin: 10px; /* Remove any top margin */
  padding: 10px; /* Remove extra padding */
  position: absolute; /* Ensure positioning respects the parent */
  top: 40px; /* Align to the top */
  left: 260px; /* Align to the left */
  flex: none; /* Prevent the section from stretching */
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333; /* Darker text color */
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
 
`;

export const Card = styled.div`

  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  max-width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff; 
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;