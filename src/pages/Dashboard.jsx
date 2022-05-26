import Header from "../components/Header";
import Stack from '@mui/material/Stack';

import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <Stack direction='column'>
      <Header />
      <main style={{padding: '3rem', backgroundColor: "#ddd"}}>
        <Outlet/>
      </main>
    </Stack>   
  );
}

export default Dashboard;